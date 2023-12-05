import { useLoaderData } from "react-router-dom";
import bookFacade from "../facade/BookFacade";

export function loader({params}) {
    const book = bookFacade.findBook(params.id);
    if (book === null) {
        return {error: "Book not found"};
    } else
        return {book};
}

export async function action({params}) {
    const book = await bookFacade.findBook(params.id);
    if (book === null) {
        return {error: "Book not found"};
    } else
        return {book};
}

const Book = () => {

    const {book} = useLoaderData();

    return ( 
        <div>
            <h2>Book</h2>

            <p>Book details</p>
            <p>title: {book.title}</p>
            <p>{book.id}</p>
            <p>{book.info}</p>

        </div>
     );
}
 
export default Book;