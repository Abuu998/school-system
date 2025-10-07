import { pgTable, uuid, bigint, text } from "drizzle-orm/pg-core"
import { users } from "./auth"
import { relations } from "drizzle-orm"
import { classes } from "./class"
import { subjects } from "./subject"
import { timetables } from "./timetable"

export const teachers = pgTable("teachers", {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    idNumber: bigint("id_number", { mode: "number" }).notNull().unique(), //,
    subjectSpecialty: text("subject_specialty").notNull(),
    department: text("department").notNull()
})


export const teacherRelations = relations(teachers, ({ one, many }) => ({
    user: one(users, {
        fields: [teachers.userId],
        references: [users.id]
    }),
    classes: many(classes),
    subjects: many(subjects),
    timetables: many(timetables)
}))