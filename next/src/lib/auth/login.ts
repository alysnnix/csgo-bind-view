"use server";

import ParseService from "../parse/setup";
import { createSession } from "../session";

export async function loginAction(prevState: unknown, formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  try {
    if (!username || !password) {
      throw new Error("Please fill all fields");
    }

    const user = await ParseService.User.logIn(username, password);

    await createSession(user.id);

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
