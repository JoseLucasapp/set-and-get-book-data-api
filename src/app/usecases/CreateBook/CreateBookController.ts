import { Request, Response } from "express";
import { CreateBookUseCase } from "./CreateBookUseCase";
import { InMemoryBooksRepository } from "../../../../tests/repositories/in-memory-books-repository";

export class CreateBookControler {
    async handle(req: Request, res: Response) {
        try {
            const booksRepository = new InMemoryBooksRepository()
            const createBookUseCase = new CreateBookUseCase(booksRepository)

            const book = await createBookUseCase.execute(req.body)
            return res.status(201).json(book)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}