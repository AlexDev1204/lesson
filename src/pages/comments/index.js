import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Api from "../../helpers/api";

export const Comments = () => {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    Api.getComments().then((p) => setComments(p));
  }, []);

  const renderComments = () => {
    return comments.map(({ postId, name, email, id, body }, i) => (
      <div key={id} className={i % 2 ? "row-done" : "row-light"}>
        <div className="ceil">
          <Link to={`/comment/${postId}`}>Post id: {postId}</Link>{" "}
        </div>
        <div className="ceil">{id}</div>
        <div className="ceil">{email}</div>
        <div className="ceil">{name}</div>
        <div className="ceil">{body}</div>
      </div>
    ));
  };

  return <div>{comments && renderComments()}</div>;
};
