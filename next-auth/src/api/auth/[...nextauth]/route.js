import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";


// route.js

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: { label: "Name", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password", placeholder: "enter your password" },
            },
            authorize: async (credentials, _req) => {
                try {
                    if (!credentials.username || !credentials.password) return null;

                    const response = await fetch(`${process.env.NEXT_SERVER_URL}/auth/login`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            username: credentials.username,
                            password: credentials.password
                        })
                    })

                    const user = await response.json();

                    if (response.ok) {
                        return user;
                    }

                    return null;
                } catch (error) {
                    throw new Error("Failed to login")
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_URL,
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user

                return token;
            }

            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user = token.user;

                return session;
            }

            return session;
        }
    }
}

const handler = NextAuth(authOptions);

export default authOptions

export { handler as GET, handler as POST } 