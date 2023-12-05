import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useRef } from "react";

/*
export async function action({ params }) {
  const book = await bookFacade.findBook(params.id);
  if (book === null) {
    return { error: "Book not found" };
  } else return redirect("/book/${book.id}");
}
*/

const NavBarLayout = () => {
  const searchRef = useRef();
  const navigate = useNavigate();

  
  const handleOnSubmit = async () => {
    const bookId = searchRef.current.value;
    if (bookId === "") {
      alert("Please fill out the form!");
      return;
    } else {
      navigate(`/${bookId}`);
    }
  };
  

  return (
    <div className="navbar-layout">
      <nav>
        <NavLink to="/">Show all books</NavLink>
        <NavLink to="/addbook">Add book</NavLink>
        <form id="search-form" method="get" onSubmit={handleOnSubmit}>
          <input
            id="searchId"
            type="number"
            name="searchId"
            ref={searchRef}
            placeholder="search for a book id"
          />
        <button onClick={handleOnSubmit}>Search</button>
        </form>
      </nav>
    </div>
  );
};

export default NavBarLayout;
