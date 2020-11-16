import styled from "styled-components";
import config from "../../config/themes";

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
    > a {
      margin-right: ${({ theme }) => `${config[theme].fs * 1.5}px`};
      font-size: ${({ theme }) => `${config[theme].fs}px`};
      color: ${({ theme }) => config[theme].text1};
      text-decoration: ${({ active }) => (active ? "underline" : "none")};
      &:last-child {
        margin-right: 0;
      }
    }
  }
  * {
    transition: all 0.1s linear;
  }
`;
