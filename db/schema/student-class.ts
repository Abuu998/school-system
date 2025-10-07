import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";
import { students } from "./student";
import { classes } from "./class";
import { relations } from "drizzle-orm";


export const studentsToClasses = pgTable(
    'Class_Students',
    {
        studentId: uuid('student_id')
            .notNull()
            .references(() => students.id),
        classId: uuid('class_id')
            .notNull()
            .references(() => classes.id),
    },
    (t) => [
            primaryKey({ columns: [t.studentId, t.classId] })
        ],
);


export const studentsToClassesRelations = relations(studentsToClasses, ({ one }) => ({
    student: one(students, {
        fields: [studentsToClasses.studentId],
        references: [students.id]
    }),
    class: one(classes, {
        fields: [studentsToClasses.studentId],
        references: [classes.id]
    })
}))