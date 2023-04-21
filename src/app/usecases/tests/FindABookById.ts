import { InMemoryBooksRepository } from "../../../../tests/repositories/in-memory-books-repository"
import { FindABookByIdUseCase } from '../FindABookById/FindABookByIdUseCase'

export const FindABookByIdTest = () => describe('Get book by id', () => {
    it('Should get a book by id', async () => {
        const booksRepository = new InMemoryBooksRepository()

        const book = new FindABookByIdUseCase(booksRepository)

        const res = await book.execute('1')

        expect(res).toBeTruthy()
    })
})