import { Response, Request, Router } from "express";
import { CreateBookControler } from "./CreateBookController";

export default (router: Router) => {
    router.post('/book', (request: Request, response: Response) => {
        const createBook = new CreateBookControler()

        return createBook.handle(request, response)
    })
}