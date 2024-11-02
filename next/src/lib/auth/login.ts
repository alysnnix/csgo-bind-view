"use server";

import ParseService from "../parse/setup";

import { createSession } from "./session";

import { IUser } from "@/types/auth/user";

export async function loginAction(prevState: unknown, formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  try {
    if (!username || !password) {
      throw new Error("Please fill all fields");
    }

    const user = await ParseService.User.logIn(username, password);

    const bindsRelation = user.relation("binds");

    const binds = await bindsRelation.query().find({ useMasterKey: true });

    const bindsData = binds.map((bind) => bind.toJSON());

    await createSession({
      username,
      objectId: user.id,
      email: user.get("email"),
      binds: bindsData as IUser["binds"],
      updatedAt: user.get("updatedAt"),
      createdAt: user.get("createdAt"),
      sessionToken: user.get("sessionToken"),
    });

    return {
      message: "User logged in",
      data: {
        username,
        password,
      },
      status: "success",
    };
  } catch (err) {
    return {
      message: err instanceof Error ? err.message : "An error occurred",
      data: { username, password },
      status: "error",
    };
  }
}
