import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const OLD_DOMAIN = "botflow.top";
const NEW_DOMAIN = "botflowstudio.com";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  if (host === OLD_DOMAIN || host === `www.${OLD_DOMAIN}` || host === `www.${NEW_DOMAIN}`) {
    const url = request.nextUrl.clone();
    url.hostname = NEW_DOMAIN;
    url.port = "";
    return NextResponse.redirect(url, { status: 301 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon\\.ico).*)"
};
