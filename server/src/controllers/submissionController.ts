import { Request, Response } from "express";
import { Repository } from "typeorm";
import { Submission } from "../models/Submission";

export default class SubmissionsController {
    submissionRespository: Repository<Submission>

    constructor(submissionRepository: Repository<Submission>) {
        this.submissionRespository = submissionRepository;
    }

    async getEntries(req: Request, res: Response) {
        const entries = await this.submissionRespository.find();
        res.status(200).send(entries);
    }

    async postEntry(req: Request, res: Response) {
        this.submissionRespository.save(req.body);
        res.status(201).send();
    }
}