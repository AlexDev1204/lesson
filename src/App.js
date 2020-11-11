import "./App.css";
import React from "react";

import Table from "./components/table";
import { List } from "./components/list";

export default class App extends React.Component {
  state = { tableExist: true, tableName: "Users", todos: true };

  render() {
    return (
      <div className="App">
        {this.state.tableExist ? (
          <Table heading={this.state.tableName} name="Aaaa"></Table>
        ) : (
          <div>Table was removed</div>
        )}
        <List name="To do" />
      </div>
    );
  }
}
