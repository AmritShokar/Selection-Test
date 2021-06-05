import { Request, Response } from "express";
import { Repository } from "typeorm";
import { FeedEntry } from "../models/FeedEntry";

export default class SubmissionsController {
    submissionRespository: Repository<FeedEntry>

    constructor(submissionRepository: Repository<FeedEntry>) {
        this.submissionRespository = submissionRepository;
    }

    async getEntries(req: Request, res: Response) {
        await this.submissionRespository.find()
            .then((entries) => {
                res.status(200).send(entries);
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    }

    async postEntry(req: Request, res: Response) {
        await this.submissionRespository.save(req.body)
            .then(() => {
                res.status(201).send();
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    }
}