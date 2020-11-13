import React from "react";
import { connect } from "react-redux";

const Comments = ({ comments }) => {
  const renderRows = () =>
    comments.map((el, i) => (
      <div key={i} className={i % 2 ? "row" : "row-dark"}>
        {JSON.stringify(el)}
      </div>
    ));

  return (
    <div>
      <h3>Comments</h3>
      {renderRows()}
    </div>
  );
};

export default connect(({ comments }) => ({ comments }))(Comments);
