import { InMemoryBooksRepository } from "../../../../tests/repositories/in-memory-books-repository"
import { FindABookById } from '../FindABookById'

export const FindABookByIdTest = () => describe('Get book by id', () => {
    it('Should get a book by id', async () => {
        const booksRepository = new InMemoryBooksRepository()

        const book = new FindABookById(booksRepository)

        const res = await book.execute('1')

        expect(res).toBeTruthy()
    })
})