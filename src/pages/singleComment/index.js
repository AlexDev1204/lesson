import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Api from "../../helpers/api";

export const Comment = ({
  match: {
    params: { id },
  },
}) => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    Api.getComment(id).then((p) => setComment(p));
  }, []);

  const renderComment = () => {
    return comment.map(({ postId, name, email, id, body }, i) => (
      <div key={id} className={i % 2 ? "row-done" : "row-light"}>
        <div className="ceil">Post id: {postId}</div>
        <div className="ceil">{id}</div>
        <div className="ceil">{email}</div>
        <div className="ceil">{name}</div>
        <div className="ceil">{body}</div>
      </div>
    ));
  };

  return (
    <div>
      <Link to="/comments">
        <button className="sort">Back to comments</button>
      </Link>
      {comment && renderComment()}
    </div>
  );
};
