import { Request, Response } from "express";
import { Repository } from "typeorm";
import { Submission } from "../models/Submission";

export default class SubmissionsController {
    submissionRespository: Repository<Submission>

    constructor(submissionRepository: Repository<Submission>) {
        this.submissionRespository = submissionRepository;
    }

    async postEntry(req: Request, res: Response) {
        console.log("received post request");

        this.submissionRespository.save(req.body);

        res.status(200).send();
    }
}