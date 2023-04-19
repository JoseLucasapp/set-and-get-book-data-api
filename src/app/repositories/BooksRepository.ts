import { Book } from "../../domain/entities/books";

export interface BooksRepository {
    findById(id: string): Promise<Book | null>
    findAll(): Promise<Book[]>
    findByTitle(title: string): Promise<Book | null>
}