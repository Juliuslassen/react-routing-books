import { Link, NavLink, Navigate, Outlet } from "react-router-dom";
import "./App.css";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Addbook from "./pages/AddBook";

function App({ bookFacade }) {
  return (
    <>
      <h1>Bookstore</h1>
      <div>
        <div id="">
          {bookFacade.getBooks().map((book) => {
            return (
              <Link key={book.id} to={"/" + book.id}>
                <FontAwesomeIcon icon={faBook} /> {book.title} by {book.author}{" "}
                {book.id}
              </Link>
            );
          })}
        </div>
        <button >Add a new book!</button>
        <Outlet />
      </div>
    </>
  );
}

export default App;
