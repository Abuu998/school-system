import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { subjects } from "./subject";
import { teachers } from "./teacher";


export const teachersToSubjects = pgTable(
    'Subjects_Teachers',
    {
        teacherId: uuid('teacher_id')
            .notNull()
            .references(() => teachers.id),
        subjectId: uuid('subject_id')
            .notNull()
            .references(() => subjects.id),
    },
    (t) => [
            primaryKey({ columns: [t.teacherId, t.subjectId] })
        ],
);


export const teachersToSubjectsRelations = relations(teachersToSubjects, ({ one }) => ({
    teacher: one(teachers, {
        fields: [teachersToSubjects.teacherId],
        references: [teachers.id]
    }),
    subject: one(subjects, {
        fields: [teachersToSubjects.teacherId],
        references: [subjects.id]
    })
}))