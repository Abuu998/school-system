import { pgTable, text, uuid } from "drizzle-orm/pg-core"
import { subjects } from "./subject"
import { teachers } from "./teacher"

export const assignments = pgTable("assignments", {
    id: uuid("id").defaultRandom().primaryKey(),
    title: text("title").notNull(),
    description: text("title").notNull(),
    subjectId: uuid("subject_id").notNull().references(() => subjects.id, { onDelete: "cascade" }),
    teacherId: uuid("teacher_id").notNull().references(() => teachers.id, { onDelete: "cascade" }),
})