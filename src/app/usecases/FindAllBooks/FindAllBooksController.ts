import { Request, Response } from "express";
import { FindAllBooksUseCase } from "./FindAllBooksUseCase";
import { InMemoryBooksRepository } from "../../../../tests/repositories/in-memory-books-repository";

export class FindAllBooksController {
    constructor() { }

    async handle(req: Request, res: Response) {
        try {
            const booksRepository = new InMemoryBooksRepository()
            const findAllBooksUseCase = new FindAllBooksUseCase(booksRepository)
            const books = await findAllBooksUseCase.execute()
            res.status(200).json(books)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}