import { NavLink, Outlet } from "react-router-dom";

function Mainlayout() {

    return ( 
        <div>
            <NavLink to=""> books</NavLink> | 
            <NavLink to="">add book</NavLink> | 
            <NavLink to="">find book</NavLink>

            <Outlet/>
        </div>
     );
}

export default Mainlayout;