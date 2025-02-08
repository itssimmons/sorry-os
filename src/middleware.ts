import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.has("isAuthenticated");

  if (!isAuthenticated && request.nextUrl.pathname.startsWith("/os")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAuthenticated && request.nextUrl.pathname.startsWith("/booting")) {
    return NextResponse.redirect(new URL("/os", request.url));
  }

  if (isAuthenticated && request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/os", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
