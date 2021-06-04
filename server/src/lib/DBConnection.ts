import { createConnection } from "typeorm";
import { Submission } from "../models/submission";

createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "selectin_test",
    entities: [
        Submission
    ],
    synchronize: true,
    logging: false
}).catch(error => console.error(error));