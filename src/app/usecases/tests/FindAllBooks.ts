import { InMemoryBooksRepository } from "../../../../tests/repositories/in-memory-books-repository"
import { FindAllBooksUseCase } from "../FindAllBooks/FindAllBooksUseCase"

export const FindAllBooksTest = () => describe('Get all books', () => {
    it('Should get a books list', async () => {
        const booksRepository = new InMemoryBooksRepository()

        const book = new FindAllBooksUseCase(booksRepository)

        const res = await book.execute()

        expect(res).toBeTruthy()
    })
})