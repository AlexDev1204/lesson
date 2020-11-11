import React, { Component } from "react";

import "./table.css";
import Tooltip from "../tooltip";
import { ReactComponent as Icon } from "../../assets/icon.svg";

export default class Table extends Component {
  state = {
    load: true,
    users: [],
  };

  shouldComponentUpdate(p, s) {
    return true;
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ load: false, users: json });
      });
  }

  onRemoveUser = (id) => () => {
    const _users = [...this.state.users];
    const index = _users.findIndex((u) => u.id === id);
    _users.splice(index, 1);
    this.setState({ users: _users });
  };

  renderUsers = () => {
    return this.state.users.map(({ name, phone, username, website, id, company, address }, i) => (
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
    const { load, users } = this.state;
    if (load) {
      return <div>...load</div>;
    } else if (!users.length) {
      return <div>empty list</div>;
    } else if (users.length) {
      return (
        <div name={this.props.name}>
          <h4>{this.props.heading}</h4>
          <div className="users">{this.renderUsers()}</div>
        </div>
      );
    } else {
      return null;
    }
  }
}
