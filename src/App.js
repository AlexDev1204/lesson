import "./App.css";
import React from "react";

import Table from "./components/table";

export default class App extends React.Component {
  state = { tableExist: true, tableName: "Users" };

  componentDidMount() {}
  render() {
    return (
      <div className="App">
        {this.state.tableExist ? (
          <Table heading={this.state.tableName} name="Aaaa"></Table>
        ) : (
          <div>Table was removed</div>
        )}
      </div>
    );
  }
}
