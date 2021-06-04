import { Router } from "express";

import SubmissionsController from "../controllers/submissions.controller";

export default class SubmissionsRoute {
    path = process.env.API_VERSION+"/submissions";
    router: Router;
    controller: SubmissionsController;
    
    constructor(controller: SubmissionsController) {
        this.router = Router();
        this.controller = controller;
        this.addRoutes();
    }

    private addRoutes() {
        this.router.post(
            this.path + "/entry", 
            this.controller.postEntry.bind(this.controller)
        );
    }

    getRouter(): Router {
        return this.router;
    }
}