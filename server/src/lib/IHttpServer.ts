import { Router } from "express";

export default interface IHttpServer {
    register(router: Router): number;
    start(): void;
    stop(): void;
}