import { pgTable, bigint, uuid } from "drizzle-orm/pg-core";

export const lastIdentifications = pgTable("identifications", {
    id: uuid("id").defaultRandom().primaryKey(),
    students: bigint("students", { mode: "number" }).$default(() => 2000000000),
    stuff: bigint("stuff", { mode: "number" }).$default(() => 1000000000),
})