import { BooksRepository } from "../../src/app/repositories/BooksRepository";
import { Book } from "../../src/domain/entities/books";

export class InMemoryBooksRepository implements BooksRepository {
    public items: Book[] = []

    async findByTitle(title: string): Promise<Book | null> {
        const book = this.items.find(b => b.props.title === title)

        if (!book) return null

        return book
    }

    async findAll(): Promise<Book[]> {
        return this.items
    }

    async findById(id: string): Promise<Book | null> {
        const book = this.items.find(b => b.id === id)

        if (!book) return null

        return book
    }
}