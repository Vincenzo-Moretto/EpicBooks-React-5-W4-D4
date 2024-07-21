import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = ({ commentsToShow, getComments }) => (
  <ListGroup style={{ color: "black" }} className="mt-2">
    {commentsToShow.map((comment) => (
      <SingleComment comment={comment} key={comment._id} getComments={getComments} />
    ))}
  </ListGroup>
);

export default CommentList;
