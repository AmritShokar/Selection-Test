import { Application, Router } from "express";
import * as Http from "http";
import cors from "cors";

import IHttpServer from "./IHttpServer";

export default class HttpServer implements IHttpServer {
    private httpServer: Http.Server;

    constructor(private driver: Application) {
        this.driver.use(cors());
    }

    register(router: Router): number {
        this.driver.use(router);
        return router.length;
    }

    start(): void {
        const httpPort = process.env.SERVER_PORT;
        this.httpServer = Http.createServer(this.driver).listen(httpPort);
        console.log(`express server running on port: ${httpPort}`);
    }

    stop(): void {
        this.httpServer.close();
    }
}