import { FaArrowCircleUp } from "react-icons/fa";
import fantasy from "../data/fantasy.json";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import { Col, Container, Row } from "react-bootstrap";
import romance from "../data/romance.json";
import { useState } from "react";
import Welcome from "./Welcome";
/* import history from "../data/history.json";
import horror from "../data/horror.json";
import scifi from "../data/scifi.json"; */

function AllTheBooks({ searchQuery, darkMode }) {
  const [id, setId] = useState(null);
  const idBook = (asin) => {
    setId(asin);
  };
  const arrowup = () => {
    window.location.href = "#";
  };

  return (
    <>
      <Welcome darkMode={darkMode} />
      <Container>
        <Row>
          <Col md={8}>
            <div className={`d-flex justify-content-center flex-wrap gap-5 my-5 pb-5 `}>
              {[...fantasy, ...romance /*  ...history, ...horror, , ...scifi */]
                .filter((libro) => libro.title.toLowerCase().includes(searchQuery))
                .map((libro) => (
                  <SingleBook libro={libro} idBook={idBook} id={id} />
                ))}
            </div>
          </Col>
          <Col md={4}>
            <CommentArea id={id} />
          </Col>
        </Row>
        <FaArrowCircleUp className="arrowup " onClick={arrowup} />
      </Container>
    </>
  );
}

export default AllTheBooks;
