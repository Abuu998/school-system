import { createAccessControl } from "better-auth/plugins/access";
import { defaultStatements, adminAc } from "better-auth/plugins/admin/access";

const statement = { 
    ...defaultStatements,
    classes: ["create",  "list", "share", "update", "delete"],
    schedule: ["create", "list", "update", "delete"],
    assignments: ["create", "list", "update", "delete"],
    grades: ["create", "list", "update", "delete"],
    timetables: ["create", "list", "update", "delete"],
    fees: ["create", "list", "update", "delete"],
    notices: ["create", "list", "update", "delete"],
    attendance: ["create", "list", "update", "delete"],
    subjects: ["create", "list", "update", "delete"],
    teachers: ["create", "list", "update", "delete"],
    students: ["create", "list", "update", "delete"],
} as const; 

export const ac = createAccessControl(statement);

// ROLES: 'admin', ['user'], 'teacher', 'student', 'parent'

export const admin = ac.newRole({
    classes: ["list", "delete", "update", "create", "share"],
    schedule: ["list", "delete", "update", "create"],
    assignments: ["create", "list", "update", "delete"],
    grades: ["create", "list", "update", "delete"],
    timetables: ["create", "list", "update", "delete"],
    fees: ["create", "list", "update", "delete"],
    notices: ["create", "list", "update", "delete"],
    attendance: ["create", "list", "update", "delete"],
    subjects: ["create", "list", "update", "delete"],
    teachers: ["create", "list", "update", "delete"],
    students: ["create", "list", "update", "delete"],
    ...adminAc.statements,
})

export const teacher = ac.newRole({
    classes: ["list", "update"],
    schedule: ["list", "update"],
    assignments: ["create", "list", "update", "delete"],
    grades: ["create", "list", "update"],
    attendance: ["create", "list", "update"],
    subjects: ["list"]
})

export const student = ac.newRole({
    classes: ["list"],
    schedule: ["list"],
    grades: ["list"],
    assignments: ["list", "update"],
    attendance: ["list"],
    timetables: ["list"],
    subjects: ["list"]
})

export const parent = ac.newRole({
    grades: ["list"],
    attendance: ["list"],
    notices: ["list"]
})