import { pgTable, pgEnum, integer, uuid, time } from "drizzle-orm/pg-core"
import { subjects } from "./subject"
import { teachers } from "./teacher"
import { classes } from "./class"
import { relations } from "drizzle-orm"


export const dayOfWeekEnum = pgEnum("days", ["Sunday", "Monday", "Tuesday", "Wednesday", "Thirsday", "Friday", "Saturday"])


export const timetables = pgTable("timetables", {
    id: uuid("id").defaultRandom().primaryKey(),
    period: integer("period").notNull().default(50),
    subjectId: uuid("subject_id").notNull().references(() => subjects.id, { onDelete: "cascade" }),
    teacherId: uuid("teacher_id").notNull().references(() => teachers.id, { onDelete: "cascade" }),
    dayOfWeek: dayOfWeekEnum("day_of_week").notNull(),
    classId: uuid("class_id").notNull().references(() => classes.id, { onDelete: "cascade" }),
    startTime: time("start_time").notNull(),
    endTime: time("end_time").notNull(),
})


export const timetableRelations = relations(timetables, ({ one }) => ({
    class: one(classes, {
        fields: [timetables.classId],
        references: [classes.id]
    }),
    subject: one(subjects, {
        fields: [timetables.subjectId],
        references: [subjects.id]
    }),
    teacher: one(teachers, {
        fields: [timetables.teacherId],
        references: [teachers.id]
    })
}))