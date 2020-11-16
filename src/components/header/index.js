import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./header.css";
import { ReactComponent as Logo } from "../../logo.svg";
import { navigation } from "../../navigation";
import { useCheckRoute } from "../../history";
import { Switcher, HeaderS, Basket, NavLink } from "./styled";
import { ReactComponent as Icon } from "../../assets/basket.svg";

export const Header = ({ basket, favorites }) => {
  const [theme, setTheme] = useState("dark");
  const isDark = theme === "dark";

  const currentRoute = useCheckRoute();
  console.log(currentRoute);
  const renderNav = () => {
    return navigation.map(({ name, route }) => {
      return (
        <NavLink to={route} key={route} count={name === "Favorites" ? favorites.length : 0}>
          {name}
        </NavLink>
      );
    });
  };
  return (
    <HeaderS theme={theme}>
      <Logo />
      <nav>{renderNav()}</nav>
      {/* <Switcher theme={theme} onClick={() => setTheme(isDark ? "light" : "dark")}>
        {isDark ? "light" : "dark"}
      </Switcher> */}
      <Basket key={`basket-${basket.length}`} count={basket.length} to={"/basket"}>
        <Icon />
      </Basket>
    </HeaderS>
  );
};

export default connect(({ count, text, basket, favorites }) => ({ count, text, basket, favorites }))(Header);
