import { withAuth } from "next-auth/middleware"
import { getJwtSecretKey } from "./helpers/jwtHelper"
import { NextResponse } from "next/server";
import { adminRequiredURLs } from "./helpers/urlHelper";
import adminRoutes from "./middlewares/adminRoutes";

export default function middleware(request){
  const { url, nextUrl, nextauth } = request;
  const isAdminRequired = adminRequiredURLs.some(url => nextUrl.pathname === url);
  if(nextUrl.pathname.startsWith('/admin') || isAdminRequired){
    return adminRoutes(request)
  }
}


// export default withAuth(
//   function middleware(req) {
//     const { nextUrl, url, nextauth } = req;
//     const isAdmin = nextauth.token?.role === 'admin'
//     const isAdminRequired = adminRequiredURLs.some(url => nextUrl.pathname === url);
//     if(nextUrl.pathname.startsWith('/admin')){
//       if(!isAdmin){
//         return NextResponse.redirect(new URL('/', url))
//       }
//       return NextResponse.next();
//     }
//     if(isAdminRequired){
//       if(!isAdmin){
//         return NextResponse.json({success: false, error: 'Admin olmanız gerekiyor'}, { status: 400 });
//       }
//       NextResponse.next();
//     }

//   },
//   {
//     callbacks: {
//       authorized({ req , token }) {
//         if(token) return true;
//       }
//     },
//     secret: getJwtSecretKey()
//   }
// )

export const config = {
  matcher: ['/admin/:path*', '/api/:path*']
}