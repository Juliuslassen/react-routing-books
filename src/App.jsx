import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function App({ bookFacade }) {

  const navigate = useNavigate();

  return (
    <>
      <h1>Bookstore</h1>
      <div>
        <div id="bookList" style={{ display: "flex", flexDirection: "column" }}>
          {bookFacade.getBooks().map((book) => {
            return (
              <NavLink key={book.id} to={"/" + book.id}>
                <FontAwesomeIcon icon={faBook} /> {book.title} {" "}
                {book.id} {" | "}
              </NavLink>
            );
          })}
        </div>
        <button onClick={() => navigate("addbook")}>Add a new book!</button>
        <Outlet />
      </div>
    </>
  );
}

export default App;
