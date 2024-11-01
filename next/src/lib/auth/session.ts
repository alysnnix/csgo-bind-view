import "server-only";
import { cookies } from "next/headers";
import { JWTPayload, SignJWT, jwtVerify } from "jose";

import { IUser } from "@/types/auth/user";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

interface UserSession extends JWTPayload {
  user: IUser;
  expiresAt: number;
}

export async function encrypt<T extends JWTPayload>(
  payload: T,
): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(
  session: string | undefined = "",
): Promise<JWTPayload | undefined> {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });

    return payload;
  } catch (error) {
    console.log("Failed to verify session");
  }
}

export async function createSession(
  user: UserSession["user"],
): Promise<string> {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const session = await encrypt({ user, expiresAt: expiresAt.getTime() });

  await (
    await cookies()
  ).set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });

  return session;
}

export async function deleteSession() {
  try {
    const cookieStore = await cookies();

    cookieStore.delete("session");

    return true;
  } catch {
    return false;
  }
}

export async function getUserFromSession(): Promise<UserSession["user"]> {
  const cookieStore = await cookies();
  const session = cookieStore.get("session");

  if (!session) {
    throw new Error("No session found");
  }

  const payload = await decrypt(session?.value);

  if (!payload) {
    throw new Error("Invalid session");
  }

  return (payload as UserSession).user;
}
