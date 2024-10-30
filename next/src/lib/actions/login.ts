"use server";

export async function createUser(prevState: unknown, formData: FormData) {
  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  const password = formData.get("password") as string;

  console.log({
    email,
    name,
    password,
  });

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    message: "Please enter a valid email",
    data: { email, name, password },
  };
}
