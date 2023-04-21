import { BooksRepository } from "../repositories/BooksRepository";

export class FindABookById {
    constructor(private booksRepository: BooksRepository) { }

    async execute(id: string) {
        const book = await this.booksRepository.findById(id)

        return book
    }
}