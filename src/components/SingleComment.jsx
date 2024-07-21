import React, { useState } from "react";
import { Button, ListGroup, FormControl, InputGroup } from "react-bootstrap";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const SingleComment = ({ comment, getComments }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.comment);

  const deleteComment = async (asin) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4YTBkMThmYzBmMzAwMTU1ZTViOTkiLCJpYXQiOjE3MjA3OTYxNTgsImV4cCI6MTcyMjAwNTc1OH0.nOAZQn8TN2anJXQAtR6C9RDcCTO4apq5ndKAOWm_OFE",
        },
      });
      if (response.ok) {
        alert("La recensione è stata elimata!");
        getComments();
      } else {
        throw new Error("La recensione non è stata eliminata!");
      }
    } catch (error) {
      alert(error);
    }
  };

  const updateComment = async (asin) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
        method: "PUT",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4YTBkMThmYzBmMzAwMTU1ZTViOTkiLCJpYXQiOjE3MjA3OTYxNTgsImV4cCI6MTcyMjAwNTc1OH0.nOAZQn8TN2anJXQAtR6C9RDcCTO4apq5ndKAOWm_OFE",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ comment: editedComment }),
      });
      if (response.ok) {
        alert("La recensione è stata aggiornata!");
        getComments();
        setIsEditing(false);
      } else {
        throw new Error("La recensione non è stata aggiornata!");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ListGroup.Item>
      {isEditing ? (
        <InputGroup>
          <FormControl value={editedComment} onChange={(e) => setEditedComment(e.target.value)} />
          <Button variant="success" onClick={() => updateComment(comment._id)}>
            Salva
          </Button>
          <Button variant="secondary" onClick={() => setIsEditing(false)}>
            Annulla
          </Button>
        </InputGroup>
      ) : (
        <>
          <div className="d-flex justify-content-between">
            {comment.comment}
            <div>
              <Button variant="danger" className="ms-2" onClick={() => deleteComment(comment._id)}>
                <FaTrashAlt />
              </Button>
              <Button variant="warning" className="ms-2" onClick={() => setIsEditing(true)}>
                <FaEdit />
              </Button>
            </div>
          </div>
        </>
      )}
    </ListGroup.Item>
  );
};

export default SingleComment;
