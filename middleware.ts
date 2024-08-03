import { fetchAuthSession } from "aws-amplify/auth/server";
import { NextRequest, NextResponse } from "next/server";
import { getAmplifyServerContext } from "./app/utils/amplify-utils";
import { headers } from 'next/headers';

export async function middleware(request: NextRequest) {

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-pathname', request.nextUrl.hostname);


  console.log(request.nextUrl.hostname);

  const response = NextResponse.next({
    headers: requestHeaders
  });

  const runWithAmplifyServerContext = await getAmplifyServerContext(request.nextUrl.hostname);

  const authenticated = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec);

        return (
          session.tokens?.accessToken !== undefined &&
          session.tokens?.idToken !== undefined
        );
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  });

  if (authenticated) {
    return response;
  }

  return NextResponse.redirect(new URL("/sign-in", request.url), {
    headers: requestHeaders
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sign-in).*)",
  ],
};
