import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  
} from "react-router-dom";
import bookFacade from "./facade/BookFacade";
import Addbook from "./pages/AddBook.jsx";
import Findbook, {loader as findABook} from "./pages/FindBook.jsx";
import ErrorPage from "./pages/Errorpage.jsx";
import Book,{loader as singleBookLoader} from "./pages/Book.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App bookFacade={bookFacade} />} errorElement={<ErrorPage/>}>
      <Route path="addbook" element={<Addbook />} />
      <Route path=":id" element={<Findbook />} loader={findABook}/>
      <Route path="book/:id" element={<Book />} loader={singleBookLoader} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
