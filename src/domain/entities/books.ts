import { Entity } from "../../core/domain/Entity";

type BooksProps = {
    title: string;
    pages: number;
    author: string;
}

export class Book extends Entity<BooksProps>{
    private constructor(props: BooksProps, id?: string) {
        super(props, id);
    }

    static create(props: BooksProps, id?: string) {
        const book = new Book(props, id);

        return book
    }
}