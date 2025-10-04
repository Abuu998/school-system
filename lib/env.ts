import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { z, ZodError } from "zod";

const envSchema = z.object({
	BETTER_AUTH_SECRET: z.string().min(1),
	BETTER_AUTH_URL: z.string().min(1),
	BETTER_AUTH_TRUST_HOST: z.string().min(1),
    DATABASE_URL: z.string().min(1)
});

expand(config());

try {
	envSchema.parse(process.env);
} catch (e) {
	if (e instanceof ZodError) {
		console.error("Environment validation error:", e.issues);
	}
}

export default envSchema.parse(process.env);