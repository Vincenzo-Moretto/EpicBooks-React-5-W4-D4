import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

function NotFound() {
  return (
    <Container>
      <Alert className="mt-5" key="warning" variant="warning">
        Rotta non gestita!
      </Alert>
    </Container>
  );
}

export default NotFound;
