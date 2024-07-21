import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import fantasy from "../data/fantasy.json";
import romance from "../data/romance.json";
import { useEffect, useState } from "react";
function BookDetails() {
  const { idDettagli } = useParams();
  const [comments, setComments] = useState([]);
  console.log(comments);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const getComments = async () => {
    setIsLoading(true);
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4YTBkMThmYzBmMzAwMTU1ZTViOTkiLCJpYXQiOjE3MjA3OTYxNTgsImV4cCI6MTcyMjAwNTc1OH0.nOAZQn8TN2anJXQAtR6C9RDcCTO4apq5ndKAOWm_OFE",
        },
      });

      if (response.ok) {
        let comments = await response.json();
        const commento = comments.filter((e) => e.elementId === idDettagli);
        setComments(commento);
        setIsLoading(false);
        setIsError(false);
      } else {
        console.log("error");
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <Container>
      {[...fantasy, ...romance /*  ...history, ...horror, , ...scifi */]
        .filter((libro) => libro.asin === idDettagli)
        .map((libro) => (
          <>
            <div className="d-flex justify-content-between mt-5">
              <div>
                <img src={libro.img} alt="Copertina" width={"400px"} className="rounded" />
              </div>
              <div>
                <h1>{libro.title}</h1>
                <p>{libro.category}</p>
                <Button>{libro.price}€</Button>
                <h3>Commenti:</h3>
                {comments.map((e) => (
                  <>
                    <div className="d-flex justify-content-between">
                      <p className="fst-italic">{e.comment}</p> by
                      <p>{e.author}</p>
                    </div>
                    {/*  <p>{e.createdAt.slice(0, 8)}</p> */}
                  </>
                ))}
              </div>
            </div>
          </>
        ))}
    </Container>
  );
}

export default BookDetails;
