import styled from "styled-components";

export const Tab = styled.button`
  font-size: 20px;
  padding: 9px 50px;
  cursor: pointer;
  opacity: 0.6;
  display: flex;
  background: transparent;
  border: 0;
  outline: 0;
  &: (max-width: 960px) {
    display: block;
  }
  ${({ active }) =>
    active &&
    `
    border-bottom: 4px solid #44566c;
    opacity: 1;
  `}
`;
export const ButtonGroup = styled.div`
  margin-top: 2px;
  margin-left: 30px;
  display: flex;
  background-color: transparent;
  &: (max-width: 960px) {
    display: block;
  }
`;
