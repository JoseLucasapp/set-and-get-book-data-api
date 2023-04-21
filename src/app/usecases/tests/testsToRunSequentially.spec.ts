import { CreateBookTest } from "./CreateBooks";
import { FindABookByIdTest } from "./FindABookById";
import { FindAllBooksTest } from "./FindAllBooks";
describe('sequentially', () => {
    CreateBookTest()
    FindAllBooksTest()
})