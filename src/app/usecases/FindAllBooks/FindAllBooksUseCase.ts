import { BooksRepository } from "../../repositories/BooksRepository";

export class FindAllBooksUseCase {
    constructor(private booksRepository: BooksRepository) { }

    async execute() {
        const books = await this.booksRepository.findAll()

        return books
    }
}