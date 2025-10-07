import { pgTable, pgEnum, decimal, uuid, date, text } from "drizzle-orm/pg-core"
import { students } from "./student"
import { relations } from "drizzle-orm"

export const feeStatusEnum = pgEnum("fees_status", ["pending", "paid", "overdue"])
export const paymentMethodEnum = pgEnum("paymentMethod", ["paypal", "cash"])


export const fees = pgTable("fees", {
    id: uuid("id").defaultRandom().primaryKey(),
    amount: decimal("amount", { precision: 2, mode: "number" }).notNull(),
    dueDate: date("due_date").notNull(),
    paymentMethod: paymentMethodEnum("payment_method").notNull().default("cash"),
    status: feeStatusEnum("status").notNull().default("pending"),
    studentId: uuid("student_id").notNull().references(() => students.id, { onDelete: "no action" })
})


export const feesRelations = relations(fees, ({ one, many }) => ({
    student: one(students, {
        fields: [fees.studentId],
        references: [students.id]
    })
}))