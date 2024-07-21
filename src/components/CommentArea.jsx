import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getComments = async () => {
    setIsLoading(true);
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4YTBkMThmYzBmMzAwMTU1ZTViOTkiLCJpYXQiOjE3MjA3OTYxNTgsImV4cCI6MTcyMjAwNTc1OH0.nOAZQn8TN2anJXQAtR6C9RDcCTO4apq5ndKAOWm_OFE",
        },
      });
      console.log(response);
      if (response.ok) {
        let comments = await response.json();
        setComments(comments);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="text-center position-fixed w-25 my-5">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={id} getComments={getComments} />

      <CommentList commentsToShow={comments} getComments={getComments} />
    </div>
  );
};

export default CommentArea;
