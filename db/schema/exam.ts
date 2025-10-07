import { uuid, decimal, text, pgTable } from "drizzle-orm/pg-core"
import { subjects } from "./subject"
import { teachers } from "./teacher"

export const exams = pgTable("exams", {
    id: uuid("id").defaultRandom().primaryKey(),
    title: text("title").notNull(),
    description: text("title").notNull(),
    subjectId: uuid("subject_id").notNull().references(() => subjects.id, { onDelete: "cascade" }),
    teacherId: uuid("teacher_id").notNull().references(() => teachers.id, { onDelete: "cascade" }),
})