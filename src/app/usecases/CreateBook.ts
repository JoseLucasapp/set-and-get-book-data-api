import { Book } from "../../domain/entities/books";
import { BooksRepository } from "../repositories/BooksRepository";

type CreateBookRequest = {
    title: string;
    pages: number;
    author: string;
}

export class CreateBook {
    constructor(private booksRepository: BooksRepository) { }

    async execute({ title, pages, author }: CreateBookRequest) {
        const book = await this.booksRepository.findByTitle(title)

        if (book) {
            throw new Error('Book already exists')
        }

        const createNewBook = Book.create({
            title, author, pages
        })

        return createNewBook
    }
}