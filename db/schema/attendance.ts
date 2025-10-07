import { pgTable, uuid, date, pgEnum } from "drizzle-orm/pg-core"
import { students } from "./student"
import { teachers } from "./teacher"
import { relations } from "drizzle-orm"

export const attendanceStatusEnum = pgEnum("statusEnum", ["present", "absent", "late"])

export const attendances = pgTable("attendances", {
    id: uuid("id").defaultRandom().primaryKey(),
    studentId: uuid("student_id").notNull().references(() => students.id, { onDelete: "no action" }),
    date: date("date").notNull().defaultNow(),
    status: attendanceStatusEnum("status").default("absent").notNull(),
    teacherId: uuid("teacher_id").notNull().references(() => teachers.id, { onDelete: "cascade" })
})


export const attendanceRelations = relations(attendances, ({ one, many }) => ({
    student: one(students, {
        fields: [attendances.studentId],
        references: [students.id]
    }),
    teacher: one(teachers, {
        fields: [attendances.teacherId],
        references: [teachers.id]
    })
}))