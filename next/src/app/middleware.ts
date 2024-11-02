import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";

import { getUserFromSession } from "@/lib/auth/session";

export async function middleware(request: NextRequest) {
  const user = await getUserFromSession();

  if (user) {
    return NextResponse.redirect(new URL(`/${user.username}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register"], // Adicione as rotas que você deseja proteger
};
