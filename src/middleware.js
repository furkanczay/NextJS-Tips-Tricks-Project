import { withAuth } from "next-auth/middleware"
import { getJwtSecretKey } from "./helpers/jwtHelper"

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req.nextauth.token)
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.role === "admin",
    },
    secret: getJwtSecretKey()
  }
)

export const config = { matcher: ["/admin/:path*"] }