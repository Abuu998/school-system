import { uuid, decimal, text, pgEnum, pgTable } from "drizzle-orm/pg-core"
import { students } from "./student"
import { assignments } from "./assignment"
import { exams } from "./exam"
import { relations } from "drizzle-orm"

export const gradeType = pgEnum("types", ["assignment", "exam"])

export const grades = pgTable("grades", {
    id: uuid("id").defaultRandom().primaryKey(),
    type: gradeType("type").notNull().default("assignment"),
    studentId: uuid("student_id").notNull().references(() => students.id, { onDelete: "cascade" }),
    assignmentId: uuid("assignment_id").references(() => assignments.id, { onDelete: "cascade" }),
    examId: uuid("exam_id").references(() => exams.id, { onDelete: "cascade" }),
    score: decimal("score").notNull(),
    comments: text("comments").notNull()
})


export const gradeRelations = relations(grades, ({ one, many }) => ({
    student: one(students, {
        fields: [grades.studentId],
        references: [students.id]
    }),
    assignments: many(assignments),
}))