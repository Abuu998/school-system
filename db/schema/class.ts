import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"
import { subjects } from "./subject"
import { students } from "./student"
import { timetables } from "./timetable"

export const classes = pgTable("classes", {
    id: uuid("id").defaultRandom().primaryKey(),
    name: text("name").notNull(), // (e.g., "Class 10A")
    gradeLevel: integer("grade_level").notNull(),
    academicYear: text("academic_year").notNull() // (e.g., "2023-2024")
})


export const classesRelations = relations(classes, ({ one, many }) => ({
    subjects: many(subjects),
    students: many(students),
    timetables: many(timetables)
}))