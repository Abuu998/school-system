import { createAuthClient } from "better-auth/react"
import env from "./env"

export const { signIn, signOut, signUp, useSession, getSession } = createAuthClient({
    baseURL: env.BETTER_AUTH_URL
})