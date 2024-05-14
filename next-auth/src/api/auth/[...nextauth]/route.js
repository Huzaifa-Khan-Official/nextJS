import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            }
        })
    ],
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}