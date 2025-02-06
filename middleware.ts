import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.has("isAuthenticated");
  console.log("isAuthenticated", isAuthenticated);
  if (!isAuthenticated && request.nextUrl.pathname.startsWith("/os")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (
    isAuthenticated &&
    (request.nextUrl.pathname.length === 0 || request.nextUrl.pathname === "/")
  ) {
    return NextResponse.redirect(new URL("/booting", request.url));
  }
	
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/os"],
};
