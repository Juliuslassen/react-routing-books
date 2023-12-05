import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenNib,
  faPaperPlane,
  faBookOpen,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import bookFacade from "../facade/BookFacade";
import { Form ,redirect } from "react-router-dom";


/*
export async function action() {
    if (data.get("title") === "" || data.get("info") === "") {
        alert("Please fill out the form!");
        return;
      } else {
        try {
          let book ={
              id: "",
            title: titleRef.current.value,
            info: infoRef.current.value,
          };
          console.log("adding book: ", book);
          await bookFacade.addBook(book);
          titleRef.current.reset();
          infoRef.current.reset();
        } catch (error) {
          console.log("Error adding book", error);
        }
  
        return redirect("/${book.id}");
      }
    }
*/


function Addbook() {

  const titleRef = useRef(null);
  const infoRef = useRef(null);

  const handleOnClick = async () => {
    if (titleRef.current.value === "" || infoRef.current.value === "") {
      alert("Please fill out the form!");
      return;
    } else {
      try {
        const book ={
            id: "",
          title: titleRef.current.value,
          info: infoRef.current.value,
        };
        console.log("adding book: ", book);
        await bookFacade.addBook(book);
        titleRef.current.value = "";
        infoRef.current.value = "";
      } catch (error) {
        console.log("Error adding book", error);
      }
      return redirect("/${book.id}");
    }
  };

  return (
    <div>
      <h1>
        <FontAwesomeIcon icon={faPenNib} size="xl" />
        You can add a new book!
      </h1>
      <div style={{ maxWidth: "300px", margin: "auto" }}>
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <label htmlFor="title">
            <FontAwesomeIcon icon={faBookOpen} />
            Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            ref={titleRef}
            style={{
              marginBottom: "10px",
              padding: "5px",
              textAlign: "center",
            }}
          />
          <label htmlFor="info">
            <FontAwesomeIcon icon={faCircleInfo} />
            info
          </label>
          <input
            type="text"
            name="info"
            placeholder="Info"
            ref={infoRef}
            style={{
              marginBottom: "10px",
              padding: "5px",
              textAlign: "center",
            }}
          />
          <button
            onClick={handleOnClick}
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
        </Form>
      </div>
    </div>
  );
}

export default Addbook;
