import { pgTable, uuid } from "drizzle-orm/pg-core";


export const students = pgTable("students", {
    id: uuid("id").defaultRandom().primaryKey(),
})