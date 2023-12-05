import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  isRouteErrorResponse,
} from "react-router-dom";
import bookFacade from "./facade/BookFacade";
import Addbook from "./pages/AddBook.jsx";
import Findbook from "./pages/FindBook.jsx";
import ErrorPage from "./pages/Errorpage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App bookFacade={bookFacade} />} errorElement={<ErrorPage/>}>
      <Route path="addbook" element={<Addbook />} />
      <Route path=":id" element={<Findbook />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
