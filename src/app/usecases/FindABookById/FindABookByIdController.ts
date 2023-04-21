import { Request, Response, response } from "express";
import { FindABookByIdUseCase } from "./FindABookByIdUseCase";
import { InMemoryBooksRepository } from "../../../../tests/repositories/in-memory-books-repository";

export class FindABookByIdController {
    constructor() { }

    async handle(req: Request, res: Response) {
        try {
            const booksRepository = new InMemoryBooksRepository()
            const findABookByIdUseCase = new FindABookByIdUseCase(booksRepository)
            const book = await findABookByIdUseCase.execute(req.params.id)
            return res.status(200).json(book)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}