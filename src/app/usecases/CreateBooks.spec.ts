import { InMemoryBooksRepository } from "../../../tests/repositories/in-memory-books-repository"
import { Book } from "../../domain/entities/books"
import { CreateBook } from "./CreateBook"

describe('Create new book', () => {
    it('Should be able to create a new book', async () => {
        const booksRepository = new InMemoryBooksRepository()

        const book = Book.create({
            title: 'Animals farm',
            author: 'George Orwell',
            pages: 200
        })

        booksRepository.items.push(book)

        const newBook = new CreateBook(booksRepository)

        const res = await newBook.execute({
            title: book.props.title,
            author: book.props.author,
            pages: book.props.pages
        })

        expect(res).toBeTruthy()
    })
})