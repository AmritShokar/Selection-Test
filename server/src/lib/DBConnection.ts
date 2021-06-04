import { createConnection, Connection } from "typeorm";
import { Submission } from "../models/submission";

async function createDBConnection(): Promise<Connection | void> {
    const connection = await createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "test",
        password: "test",
        database: "selection_test",
        entities: [
            Submission
        ],
        synchronize: true,
        logging: false
    }).catch(error => console.error(error));

    return connection;
}

export default createDBConnection;