import { withAuth } from "next-auth/middleware"
import { getJwtSecretKey } from "./helpers/jwtHelper"
import { NextResponse } from "next/server";
import { adminRequiredURLs } from "./helpers/urlHelper";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    const { nextUrl, url, nextauth } = req;
    const isAdmin = nextauth.token?.role === 'admin'
    const isAdminRequired = adminRequiredURLs.some(url => nextUrl.pathname === url);
    if(nextUrl.pathname.startsWith('/admin') || isAdminRequired){
      if(!isAdmin){
        return NextResponse.redirect(new URL('/', url))
      }
      return NextResponse.next();
    }
    if(nextUrl.pathname.startsWith('/api')){
    }

  },
  {
    callbacks: {
      authorized: ({ token }) => token ? true : false,
    },
    secret: getJwtSecretKey()
  }
)

export const config = { matcher: ["/admin/:path*", "/api/:path*"] }