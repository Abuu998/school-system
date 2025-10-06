import { db } from "@/db";
import { betterAuth } from "better-auth";
import { admin } from "better-auth/plugins";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        usePlural: true
    }),
    emailAndPassword: { 
        enabled: true, 
    },
    plugins: [
        admin(),
        nextCookies()
    ]
});