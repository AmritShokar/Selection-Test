import { Request, Response } from "express";

export default class SubmissionsController {

    constructor() { }

    async postEntry(req: Request, res: Response) {
        console.log("received post request");

        console.log(req.body);

        res.status(200).send();
    }
}