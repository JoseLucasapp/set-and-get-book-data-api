import { BooksRepository } from "../repositories/BooksRepository";

export class FindAllBooks {
    constructor(private booksRepository: BooksRepository) { }

    async execute() {
        const books = await this.booksRepository.findAll()

        return books
    }
}