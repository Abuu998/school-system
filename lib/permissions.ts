import { createAccessControl } from "better-auth/plugins/access";
import { defaultStatements, adminAc } from "better-auth/plugins/admin/access";

const statement = { 
    class: ["create",  "read", "share", "update", "delete"],
    schedule: ["create", "read", "update", "delete"]
} as const; 

const ac = createAccessControl(statement); 