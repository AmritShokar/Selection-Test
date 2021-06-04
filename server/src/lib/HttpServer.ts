import { Application, Router } from "express";

export class HttpServer {
    private httpServer: Application;

    constructor(private driver: Application) {
        this.httpServer = driver;
    }

    registerRoute(router: Router): number {
        this.httpServer.use(router);
        console.log("router added");
        return -1
    }

    start(): void {

    }

    stop(): void {
        
    }
}