"use server";

import { signOut } from "@/auth"; // auth.ts から import

export async function doSignOut() {
  await signOut({
    redirectTo: "/mypage", // サインアウト後の遷移先
  });
}
