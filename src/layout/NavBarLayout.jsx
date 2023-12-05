import { Form, NavLink } from "react-router-dom";
import "./navbar.css";


const NavBarLayout = () => {
  
  

  return ( 
    <div className="navbar-layout">
      <nav >
      <NavLink to="/">Show all books</NavLink>
      <NavLink to="/addbook">Add book</NavLink>
      <Form id="search-form" role="search" method="get" to="/book/:id">
        <input 
          id="searchId"
          type="number"
          name="searchId"
          placeholder="search for a book id"
          />
      </Form>
      </nav>
    </div>
   );
}
 
export default NavBarLayout;
