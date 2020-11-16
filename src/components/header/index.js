import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./header.css";
import { ReactComponent as Logo } from "../../logo.svg";
import { navigation } from "../../navigation";
import { useCheckRoute } from "../../history";
import { Switcher, HeaderS } from "./styled";

export const Header = () => {
  const [theme, setTheme] = useState("dark");
  const isDark = theme === "dark";

  const currentRoute = useCheckRoute();
  console.log(currentRoute);
  const renderNav = () => {
    return navigation.map(({ name, route }) => {
      return (
        <Link active={currentRoute === route} to={route} key={route}>
          {name}
        </Link>
      );
    });
  };
  return (
    <HeaderS theme={theme}>
      <Logo />
      <nav>{renderNav()}</nav>
      <Switcher theme={theme} onClick={() => setTheme(isDark ? "light" : "dark")}>
        {isDark ? "light" : "dark"}
      </Switcher>
    </HeaderS>
  );
};

export default connect(({ count, text }) => ({ count, text }))(Header);
