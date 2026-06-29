import { auth0 } from "@/lib/auth0";
import { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  return await auth0.middleware(request);
}

export const config = {
  matcher: [
    // Required: match all paths for Auth0 middleware
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
