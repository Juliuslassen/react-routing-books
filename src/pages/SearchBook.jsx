import { Form } from "react-router-dom";

const SearchBook = () => {
    return ( 
        <div>
            <Form id="search-form" role="search" method="get" action="/">
            <input 
                id="searchId"
                type="number"
                name="searchId"
                placeholder="search for an id"
                />
            </Form>
        </div>
     );
}
 
export default SearchBook;