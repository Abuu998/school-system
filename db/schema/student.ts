import { pgTable, uuid, date, bigint, decimal } from "drizzle-orm/pg-core"
import { users } from "./auth"
import { parents } from "./parent"
import { relations } from "drizzle-orm"
import { fees } from "./fees"
import { attendances } from "./attendance"
import { grades } from "./grade"
import { classes } from "./class"

export const students = pgTable("students", {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    idNumber: bigint("id_number", { mode: "number" }).notNull().unique(),
    gpa: decimal("gpa", { precision: 2, mode: "number" }).notNull().default(4),
    dob: date("date_of_birth").notNull(),
    classId: uuid("class_id").notNull(),
    enrollmentDate: date("enrollment_date").notNull(),
    // parentId: uuid("parent_id").notNull().references(() => parents.id),
    // schoolEmail: text("school_email").notNull().$default((): string => `s${students.studentId}@school.edu`)
})


export const studentRelations = relations(students, ({ one, many }) => ({
    user: one(users, {
        fields: [students.userId],
        references: [users.id]
    }),
    parent: one(parents),
    fees: many(fees),
    attendances: many(attendances),
    grades: many(grades),
    classes: many(classes)
}))