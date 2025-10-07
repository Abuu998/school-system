import { db } from "@/db";
import { betterAuth } from "better-auth";
import { admin as adminPlugin } from "better-auth/plugins";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { ac, admin, teacher, student, parent } from "./permissions"

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        usePlural: true
    }),
    emailAndPassword: { 
        enabled: true, 
    },
    plugins: [
        adminPlugin({
            ac,
            roles: {
                admin,
                teacher,
                student,
                parent
            }
        }),
        nextCookies()
    ]
});