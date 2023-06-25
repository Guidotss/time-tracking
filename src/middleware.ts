import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/") {
    const token = req.cookies.get("token");
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.nextUrl).href);
    } else {
      return NextResponse.next();
    }
  }
}
