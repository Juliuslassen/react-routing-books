import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bookFacade from "../facade/BookFacade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faFeather, faCircleInfo, faFingerprint, faBookAtlas} from '@fortawesome/free-solid-svg-icons'

function Findbook() {

    const { id } = useParams();
    const [book, setBook] = useState({url:""});
    

    useEffect(() => {
        const book = bookFacade.findBook(Number.parseInt(id));
        setBook(book);
    }, [id]);

    return (  
        <div>
            <h2><FontAwesomeIcon icon={faBookAtlas} size="xl"/> Book</h2>
            <p><FontAwesomeIcon icon={faBookOpen}/> Title: {book.title} <FontAwesomeIcon icon={faFeather}/></p>
            <p><FontAwesomeIcon icon={faCircleInfo} /> info: {book.info}</p>
            <p><FontAwesomeIcon icon={faFingerprint} /> id: {book.id}</p>
        </div>
    );
}

export default Findbook;