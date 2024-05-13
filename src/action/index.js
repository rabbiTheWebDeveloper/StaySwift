"use server";

import { signIn } from "@/auth";

export async function login(fromData) {
  try {
    const response = await signIn("credentials", {
      email: fromData.get("email"),
      password: fromData.get("password"),
      redirect: false,
    });
    return response;
  } catch (err) {
    throw new err();
  }
}
