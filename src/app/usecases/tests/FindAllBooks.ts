import { InMemoryBooksRepository } from "../../../../tests/repositories/in-memory-books-repository"
import { FindAllBooks } from "../FindAllBooks"

export const FindAllBooksTest = () => describe('Get all books', () => {
    it('Should get a books list', async () => {
        const booksRepository = new InMemoryBooksRepository()

        const book = new FindAllBooks(booksRepository)

        const res = await book.execute()

        expect(res).toBeTruthy()
    })
})