"use server";

import ParseService from "../parse/setup";

export async function createUser(prevState: unknown, formData: FormData) {
  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  const password = formData.get("password") as string;

  try {
    if (!email || !name || !password) {
      throw new Error("Please fill all fields");
    }

    const user = new ParseService.User();

    user.set("email", email);
    user.set("username", name);
    user.set("password", password);

    await user.signUp(
      {},
      {
        useMasterKey: true,
      },
    );

    return {
      message: "User created",
      data: { email, name, password },
      status: "success",
    };
  } catch (err) {
    return {
      message: err instanceof Error ? err.message : "An error occurred",
      data: { email, name, password },
      status: "error",
    };
  }
}
