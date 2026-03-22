import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const headers = Object.fromEntries(request.headers.entries());
  const cookies = request.cookies.getAll().map((cookie) => ({
    name: cookie.name,
    value: cookie.value,
  }));

  const requestSnapshot = {
    method: request.method,
    url: request.url,
    pathname: request.nextUrl.pathname,
    search: request.nextUrl.search,
    headers,
    cookies,
    userAgent: headers["user-agent"] ?? null,
  };

  console.warn(
    "[middleware request]",
    JSON.stringify(requestSnapshot, null, 2)
  );
  console.error(
    "[middleware request]",
    JSON.stringify(requestSnapshot, null, 2)
  );
  console.log("[middleware request]", JSON.stringify(requestSnapshot, null, 2));

  return NextResponse.next();
}
