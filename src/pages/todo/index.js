import React from "react";
import { connect } from "react-redux";

const Todo = ({ todos }) => {
  const renderRows = () =>
    todos.map((el, i) => (
      <div key={i} className={i % 2 ? "row" : "row-light"}>
        {JSON.stringify(el)}
      </div>
    ));

  return (
    <div>
      <h3>To dos</h3>
      {renderRows()}
    </div>
  );
};

export default connect(({ todos }) => ({ todos }))(Todo);
