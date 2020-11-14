import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./header.css";
import { ReactComponent as Logo } from "../../logo.svg";
import { navigation } from "../../navigation";
import { useCheckRoute, useActiveRoute } from "../../history";

export const Header = () => {
  const currentRoute = useCheckRoute();
  console.log(currentRoute);
  const renderNav = () => {
    return navigation.map(({ name, route }) => {
      return (
        <Link data-active={currentRoute === route} className="nav-link" to={route} key={route}>
          {name}
        </Link>
      );
    });
  };
  return (
    <header className="header">
      <Logo />
      <nav className="nav">{renderNav()}</nav>
    </header>
  );
};

export default connect(({ count, text }) => ({ count, text }))(Header);
