import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";

/* import CommentArea from "./CommentArea"; */

function SingleBook(props) {
  const { idDettagli = props.libro.asin } = useParams();
  const dettagli = () => {
    window.location.href = `/book/${idDettagli}`;
  };

  return (
    <Card
      className="libri"
      style={{
        width: "15rem",
        transform: props.libro.asin === props.id ? "scale(1.1)" : "",
        borderColor: props.libro.asin === props.id ? "red" : "",
      }}
    >
      <Card.Img
        style={{ height: "300px", backgroundSize: "cover" }}
        variant="top"
        src={props.libro.img}
        onClick={() => props.idBook(props.libro.asin)}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title className="fs-5">{props.libro.title}</Card.Title>
        <div className="d-flex">
          <Button className="w-50 me-3" variant="warning" onClick={() => dettagli()}>
            Dettagli
          </Button>
          <Button className="w-50" variant="primary">
            {props.libro.price} €
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
