import styled from "styled-components";
import config from "../../config/themes";

import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
  margin-right: 20px;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  position: relative;
  &:last-child {
    margin-right: 0;
  }
  &:before {
    display: ${({ count }) => (count ? "flex" : "none")};
    width: 20px;
    height: 20px;
    content: ${({ count }) => `'${count}'`};
    background: #e1aa06;
    color: #fff;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    position: absolute;
    border-radius: 50%;
    right: -19px;
    top: -12px;
  }
`;

export const Switcher = styled.button`
  width: 70px;
  height: 32px;
  margin-left: auto;
  border-radius: 4px;
  border: none;
  background: ${({ theme }) => config[theme].bg1};
  outline: none;
  cursor: pointer;
  font-size: ${({ theme }) => `${config[theme].fs - 4}px`};
  color: ${({ theme }) => config[theme].text1};
  text-transform: uppercase;
`;

export const HeaderS = styled.header`
  width: 100vw;
  height: 70px;
  background: ${({ theme }) => config[theme].headerBg};
  padding: 0 40px;
  display: flex;
  align-items: center;
  > svg {
    height: 50px;
    > g {
      fill: ${({ theme }) => config[theme].bg2};
    }
  }
  nav {
    margin-left: ${({ theme }) => `${config[theme].fs * 2.5}px`};
    display: flex;
    align-items: center;
  }
  * {
    transition: all 0.1s linear;
  }
`;

export const Basket = styled(Link)`
  display: flex;
  margin-left: auto;
  position: relative;
  &:before {
    display: ${({ count }) => (count ? "flex" : "none")};
    width: 20px;
    height: 20px;
    content: ${({ count }) => `'${count}'`};
    background: #06bee1;
    color: #fff;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    position: absolute;
    border-radius: 50%;
    right: -5px;
  }
  > svg {
    width: 45px;
    height: 45px;
    margin: auto;
    path {
      fill: #fff;
    }
  }
`;
