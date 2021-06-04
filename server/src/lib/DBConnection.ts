import { createConnection, Connection } from "typeorm";
import { FeedEntry } from "../models/FeedEntry";

async function createDBConnection(): Promise<Connection | void> {
    const connection = await createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "test",
        password: "test",
        database: "selection_test",
        entities: [
            FeedEntry
        ],
        synchronize: true,
        logging: false
    }).catch(error => console.error(error));

    return connection;
}

export default createDBConnection;