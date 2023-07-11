import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const cookieName = "myawesomecookie";
  let hadCookie = request.cookies.has(cookieName);
  
  if (hadCookie) {
    let cookie = request.cookies.get(cookieName);
    console.log(cookie); // => { name: 'nextjs', value: 'fast', Path: '/' }
  } else {
    request.cookies.set(cookieName, "potato");
  }

  // Setting cookies on the response using the `ResponseCookies` API
  const response = NextResponse.rewrite(new URL("/", request.url), {request})
  if (!hadCookie) {
    response.cookies.set(cookieName, "potato");
  }

  return response;
}
