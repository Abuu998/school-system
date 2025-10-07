import { pgTable, uuid } from "drizzle-orm/pg-core"
import { users } from "./auth"
import { students } from "./student"
import { relations } from "drizzle-orm"

export const parents = pgTable("parents", {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    studentId: uuid("student_id").notNull().references(() => students.id, { onDelete: "cascade" }),
})


export const parentRelations = relations(parents, ({ one, many }) => ({
    user: one(users, {
        fields: [parents.userId],
        references: [users.id]
    }),
    students: many(students)
}))