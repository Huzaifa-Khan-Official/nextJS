/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_SERVER_URL: process.env.NEXT_SERVER_URL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL
    }
};

export default nextConfig;
