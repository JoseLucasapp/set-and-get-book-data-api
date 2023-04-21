import { InMemoryBooksRepository } from "../../../../tests/repositories/in-memory-books-repository"
import { CreateBook } from "../CreateBook"

export const CreateBookTest = () => describe('Create new book', () => {
    it('Should be able to create a new book', async () => {
        const booksRepository = new InMemoryBooksRepository()

        const newBook = new CreateBook(booksRepository)

        const res = await newBook.execute({
            title: 'Animals farm',
            author: 'George Orwell',
            pages: 200
        })

        booksRepository.items.push(res)

        expect(res).toBeTruthy()
    })
})