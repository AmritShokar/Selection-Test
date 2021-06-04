import { Application, Router } from "express";
import * as Http from "http";

export class HttpServer {
    private httpServer: Http.Server;

    constructor(private driver: Application) { }

    registerRoute(router: Router): number {
        this.driver.use(router);
        console.log("router added");
        return router.length;
    }

    start(): void {
        const httpPort = process.env.SERVER_PORT;
        this.httpServer = Http.createServer(this.driver).listen(httpPort);
    }

    stop(): void {
        this.httpServer.close();
    }
}