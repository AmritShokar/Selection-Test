import express from "express";
import { Repository } from "typeorm";

import createDBConnection from "./lib/DBConnection";
import { FeedEntry } from "./models/FeedEntry";
import IHttpServer from "./lib/IHttpServer";
import HttpServer from "./lib/HttpServer";
import SubmissionsController from "./controllers/submissionController";
import SubmissionsRoute from "./routes/submissionRoute";

export default class SelectionTestServer {
    private server: IHttpServer;

    constructor() {
        const driver = express();
        this.server = new HttpServer(driver);
    }

    async start(): Promise<void> {
        const connection = await createDBConnection();
        let submissionRepository: Repository<FeedEntry>;

        if (connection) {
            submissionRepository = connection.getRepository(FeedEntry);
        } else {
            throw Error("Failed to connect to database");
        }

        const submissionsController = new SubmissionsController(submissionRepository);
        const submissionsRoute = new SubmissionsRoute(submissionsController);

        this.server.register(submissionsRoute.getRouter());

        this.server.start();
    }

    stop(): void {
        this.server.stop();
    }
}