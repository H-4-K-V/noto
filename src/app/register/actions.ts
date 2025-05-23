"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "../../../utils/supabase/server";
import { redirect } from "next/navigation";

export async function register(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  console.log(data);

  revalidatePath("/", "layout");
  redirect("/login");
}
