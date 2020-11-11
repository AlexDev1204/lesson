import React, { useEffect, useState } from "react";

import Api from "../../helpers/api";

export const Posts = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    Api.getPosts().then((p) => setPosts(p));
  }, []);

  const renderPosts = () => {
    return posts.map(({ userId, title, id, body }, i) => (
      <div key={id} className={i % 2 ? "row-done" : "row-light"}>
        <div className="ceil">{id}</div>
        <div className="ceil">{userId}</div>
        <div className="ceil">{title}</div>
        <div className="ceil">{body}</div>
      </div>
    ));
  };

  return <div>{posts && renderPosts()}</div>;
};
