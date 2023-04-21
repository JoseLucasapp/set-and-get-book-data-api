import { Router } from "express";
import CreateBookRoute from "../usecases/CreateBook/CreateBookRoute";
import FindABookByIdRoute from "../usecases/FindABookById/FindABookByIdRoute";
import FindAllBooksRoute from "../usecases/FindAllBooks/FindAllBooksRoute";

export default (router: Router) => {
    CreateBookRoute(router)
    FindABookByIdRoute(router)
    FindAllBooksRoute(router)
}