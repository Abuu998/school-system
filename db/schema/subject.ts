import { pgTable, text, uuid } from "drizzle-orm/pg-core"
import { classes } from "./class"
import { relations } from "drizzle-orm"
import { teachers } from "./teacher"
import { timetables } from "./timetable"

export const subjects = pgTable("subjects", {
    id: uuid("id").defaultRandom().primaryKey(),
    name: text("name").notNull(), // (e.g., "Mathematics")
    classId: uuid("class_id").notNull().references(() => classes.id, { onDelete: "cascade" })
})


export const subjectRelations = relations(subjects, ({ one, many }) => ({
    class: one(classes, {
        fields: [subjects.classId],
        references: [classes.id]
    }),
    teachers: many(teachers),
    timetables: many(timetables)
}))