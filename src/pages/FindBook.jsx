import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import bookFacade from "../facade/BookFacade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faFeather,
  faCircleInfo,
  faFingerprint,
  faBookAtlas,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export async function loader({ params }) {
  const book = await bookFacade.findBook(Number.parseInt(params.id));
  if (!book ) {
    return { error: "Book not found" };
  } else return { book };
}

function Findbook() {
  const { id } = useParams();
  const [book, setBook] = useState({url:""});

  useEffect(() => {
    console.log("id: ", id);
    if (id !== null) {
      const book = bookFacade.findBook(Number.parseInt(id));
      setBook(book);
    }
  }, [id]);

  return (
    <div>
        <h1>Here is the book you searched for <FontAwesomeIcon icon={faMagnifyingGlass} /></h1>
      {book != null ? (
        <div>
          <h2>
            <FontAwesomeIcon icon={faBookAtlas} size="xl" /> Book
          </h2>
          <p>
            <FontAwesomeIcon icon={faBookOpen} /> Title: {book.title}{" "}
            <FontAwesomeIcon icon={faFeather} />
          </p>
          <p>
            <FontAwesomeIcon icon={faCircleInfo} /> info: {book.info}
          </p>
          <p>
            <FontAwesomeIcon icon={faFingerprint} /> id: {book.id}
          </p>
        </div>
      ) : (
        <p>Book not found</p>
      )}
    </div>
  );
}

export default Findbook;
