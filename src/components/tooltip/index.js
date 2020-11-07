import React, { Component } from "react";

import "./tooltip.css";

export default class Tooltip extends Component {
  render() {
    const { info, address } = this.props;
    return (
      <div className="tooltip">
        <h3 className="small">Company info</h3>
        <p className="info">{info.bs}</p>
        <p className="info">{info.catchPhrase}</p>
        <p className="info">{info.name}</p>
        <h3 className="small">Company address</h3>
        <p className="info">{address.city}</p>
        <p className="info">{address.street}</p>
        <p className="info">{address.suite}</p>

        {/* triangle */}
        <div className="triangle-right" />
      </div>
    );
  }
}
