import { createAuthClient } from "better-auth/react"
import { adminClient } from "better-auth/client/plugins"
import { ac, admin, teacher, student, parent } from "./permissions"
import env from "../env"

export const authClient = createAuthClient({
    baseURL: env.BETTER_AUTH_URL,
    plugins: [
        adminClient({
            ac,
            roles: {
                admin,
                teacher,
                student,
                parent
            }
        })
    ]
})