import express, { Application, Router } from "express";

import HttpServer from "../src/lib/HttpServer";

describe("HttpServer", () => {
    let driver: Application;
    let httpServer: HttpServer;

    beforeEach(() => {
        driver = express();
        httpServer = new HttpServer(driver);
    });

    it("returns the total number of routes in the router", () => {
        let router = Router();

        router.get("/", (req, res) => {
            res.status(200).send();
        });
        router.get("/test1", (req, res) => {
            res.status(200).send();
        });
        router.get("/test2", (req, res) => {
            res.status(200).send();
        });

        let numberOfRoutes = httpServer.register(router);

        expect(numberOfRoutes).toEqual(3);
    });
});