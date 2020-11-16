import styled from "styled-components";

export const Heading = styled.h3`
  text-align: center;
  margin: ${({ m = "0 0 30px" }) => m};
  color: ${({ white }) => (white ? "#fff" : "#272727")};
  font-size: ${({ fSize = 24 }) => `${fSize}px`};
  height: ${({ h = "fit-content" }) => h};
`;

const Flex = styled.div`
  display: flex;
  flex-direction: ${({ dir = "row" }) => dir};
  padding: ${({ p = 0 }) => p};
  margin: ${({ m = 0 }) => m};
  box-sizing: border-box;
`;

export const Wrapper = styled(Flex)`
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

export const Item = styled(Flex)`
  width: calc(20% - 15px);
  height: 390px;
  background-color: ${({ bg = "#fffbe7" }) => bg};
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const EmptyItem = styled.div`
  width: calc(20% - 15px);
`;

export const Text = styled.p`
  margin: 0;
  font-size: 14px;
  color: #272727;
`;

export const Row = styled(Flex)`
  margin-top: auto;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 150px;
  height: 32px;
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 10px;
  background: ${({ dark, choosen }) => (choosen ? "#c5b530" : dark ? "#1768ac" : "#06bee1")};
  cursor: pointer;
  color: #fff;
`;
