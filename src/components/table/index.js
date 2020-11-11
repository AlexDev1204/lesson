import React, { Component } from "react";

import "./table.css";
import Tooltip from "../tooltip";
import { ReactComponent as Icon } from "../../assets/icon.svg";

export default class Table extends Component {
  onRemoveUser = (id) => () => {
    const _users = [...this.state.users];
    const index = _users.findIndex((u) => u.id === id);
    _users.splice(index, 1);
    this.setState({ users: _users });
  };

  renderUsers = () => {
    return this.props.users.map(({ name, phone, username, website, id, company, address }, i) => (
      <div key={i} className={i % 2 ? "row" : "row-light"}>
        <div className="ceil">{id}</div>
        <div className="ceil">{username}</div>
        <div className="ceil">{name}</div>
        <div className="ceil">{phone}</div>
        <div className="ceil">
          {website}{" "}
          <button className="remove" onClick={this.onRemoveUser(id)}>
            <Icon />
          </button>
          <button className="more">
            more <Tooltip info={company} address={address} />
          </button>
        </div>
      </div>
    ));
  };

  render() {
    if (this.props.users) {
      return <div className="users">{this.renderUsers()}</div>;
    } else return null;
  }
}
