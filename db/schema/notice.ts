import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core"
import { users } from "./auth"

export const notices = pgTable("notices", {
    id: uuid("id").defaultRandom().primaryKey(),
    title: text("title").notNull(),
    content: text("content").notNull(),
    postedBy: uuid("posted_by").notNull().references(() => users.id, { onDelete: "cascade" }),
    postedDate: timestamp("posted_date").notNull().defaultNow(),
    targetRoles: text("targetRole").notNull()
})