import React from "react";
import { connect } from "react-redux";

const Posts = ({ posts }) => {
  const renderRows = () =>
    posts.map((el, i) => (
      <div key={i} className={i % 2 ? "row" : "row-light"}>
        {JSON.stringify(el)}
      </div>
    ));

  return (
    <div>
      <h3>Posts</h3>
      {renderRows()}
    </div>
  );
};

export default connect(({ posts }) => ({ posts }))(Posts);
