import { Request, Response, Router } from "express";
import { FindABookByIdController } from "./FindABookByIdController";

export default (router: Router) => {
    router.get('/book/:id', (request: Request, response: Response) => {
        const books = new FindABookByIdController()
        return books.handle(request, response)
    })
}