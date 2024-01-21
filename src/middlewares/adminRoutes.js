import { getJwtSecretKey } from "@/helpers/jwtHelper"
import { withAuth as adminRoutes } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default adminRoutes(
      // `withAuth` augments your `Request` with the user's token.
      function middleware(req) {
            NextResponse.next()
      },
      {
        callbacks: {
          authorized: ({ token }) => token?.role === "admin",
        },
        secret: getJwtSecretKey()
      },
    )
