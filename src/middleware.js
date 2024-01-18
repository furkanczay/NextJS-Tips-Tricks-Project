import { withAuth } from "next-auth/middleware"
import { getJwtSecretKey } from "./helpers/jwtHelper"

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.role === "admin",
    },
    secret: getJwtSecretKey()
  }
)

export const config = { matcher: ["/admin/:path*", "/api/articles/create"] }