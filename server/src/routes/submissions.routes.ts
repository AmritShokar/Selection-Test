import { Router } from "express";

export default class SubmissionsRoute {
    path = process.env.API_VERSION+"/submissions";
    router: Router;
    
    constructor() {
        this.router = Router();
        this.addRoutes();
    }

    private addRoutes() {
        this.router.post(this.path + "/entry");
    }

    getRouter(): Router {
        return this.router;
    }
}