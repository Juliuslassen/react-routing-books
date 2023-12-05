import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";

function Addbook() {
  const [book, setBook] = useState({ title: "", info: "" });
  const title = useRef(null);
  const info = useRef(null);

  
  return (
    <div>
      <h1>
        <FontAwesomeIcon icon={faPenNib} size="xl" />
        You can add a new book!
      </h1>
      <div style={{ maxWidth: "300px", margin: "auto" }}>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <input
            type="text"
            name="title"
            placeholder="Title"
            ref={title}
            style={{
              marginBottom: "10px",
              padding: "5px",
              textAlign: "center",
            }}
          />
          <input
            type="text"
            name="info"
            placeholder="Info"
            ref={info}
            style={{
              marginBottom: "10px",
              padding: "5px",
              textAlign: "center",
            }}
          />
          <button
            onClick={() => {
                setBook({title: title.current.value, info: info.current.value});
                bookFacade.addBook(book);
                title.current.value = "";
                info.current.value = "";
            }}
            style={{
              backgroundColor: "#007BFF",
              color: "#fff",
              padding: "8px 12px",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faPaperPlane}
              style={{ marginRight: "5px" }}
            />{" "}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Addbook;
