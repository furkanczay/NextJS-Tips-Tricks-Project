import { getJwtSecretKey } from "@/helpers/jwtHelper"
import User from "@/models/User"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { encode, decode } from "next-auth/jwt"
import { checkUserPassword } from "@/libs/auth"
import dbConnect from "@/libs/database/dbConnect"
await dbConnect();

const handler = NextAuth({
  providers: [
    // Credentials Provider
    Credentials({
        name: "credentials",
        credentials: {
            username: { label: "Kullanıcı adı", type: "text", placeholder: "Kullanıcı adı" },
            password: { label: "Şifre", type: "password" }
        },
        authorize: async (credentials, req) => {
            const { username, password } = credentials

            const user = await User.findOne({ username }).select("+password");
            const checkUser = await checkUserPassword(user, password)
            console.log(checkUser);
            if(user && checkUser){
                return user;
            }
            return null;
        }
    })
  ],
  callbacks: {
    session: async ({ session, user, token }) => {
        if(token){
            session.user.id = token.id;
            session.user.username = token.username;
            session.user.email = token.email;
            session.user.role = token.role;
            session.accessToken = token.accessToken;
            session.refreshToken = token.refreshToken;
        }
        return session;
    },
    jwt: async ({ token, user, account, profile }) => {
        if(user){
            token.id = user.id;
            token.username = user.username;
            token.email = user.email;
            token.role = user.role;
        }
        return token;
    }
  },
  session: {
    strategy: "jwt",
    generateSessionToken: () => {
        return randomUUID?.() ?? randomBytes(32).toString("hex")
    },
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
    encode: async ({ secret, token, maxAge }) => {
        const encodedToken = await encode({token, secret, maxAge})
        return encodedToken;
    },
    decode: async ({ secret, token, maxAge }) => {
        const decodedToken = await decode({token, secret, maxAge})
        return decodedToken;
    }
  },
  secret: getJwtSecretKey()
})

export { handler as GET, handler as POST }