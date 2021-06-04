import { Request, Response } from "express";
import { Repository } from "typeorm";
import { FeedEntry } from "../models/FeedEntry";

export default class SubmissionsController {
    submissionRespository: Repository<FeedEntry>

    constructor(submissionRepository: Repository<FeedEntry>) {
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