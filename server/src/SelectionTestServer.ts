import express from "express";

import IHttpServer from "./lib/IHttpServer";
import HttpServer from "./lib/HttpServer";
import SubmissionsController from "./controllers/submissions.controller";
import SubmissionsRoute from "./routes/submissions.routes";

export default class SelectionTestServer {
    private server: IHttpServer;

    constructor() {
        const driver = express();
        this.server = new HttpServer(driver);
    }

    start(): void {
        const submissionsController = new SubmissionsController();
        const submissionsRoute = new SubmissionsRoute(submissionsController);

        this.server.register(submissionsRoute.getRouter());

        this.server.start();
    }

    stop(): void {
        this.server.stop();
    }
}