import { bigserial, pgTable, text, uuid, integer } from "drizzle-orm/pg-core"
import { users } from "./auth"

export const students = pgTable("students", {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    studentId: bigserial("student_id", {
        mode: "bigint",
    }), //,
    grade: text("grade").notNull(),
    attendance: integer("attendance").notNull().default(0),
    schoolEmail: text("school_email").notNull().$default((): string => `s${students.studentId}@school.edu`)
})

// export const 