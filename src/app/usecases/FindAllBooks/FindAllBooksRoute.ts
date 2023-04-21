import { Request, Response, Router } from "express";
import { FindAllBooksController } from "./FindAllBooksController";

export default (router: Router) => {
    router.get('/book', (request: Request, response: Response) => {
        const books = new FindAllBooksController()

        return books.handle(request, response)
    })
}