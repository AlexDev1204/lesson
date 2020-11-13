import React from "react";
import { connect } from "react-redux";

export const Users = ({ users }) => {
  const renderRows = () =>
    users.map((el, i) => (
      <div key={i} className={i % 2 ? "row" : "row-light"}>
        {JSON.stringify(el)}
      </div>
    ));

  return (
    <div>
      <h3>Users</h3>
      {renderRows()}
    </div>
  );
};

const mapStateToProps = (state) => ({ users: state.users });

export default connect(mapStateToProps, null)(Users);
