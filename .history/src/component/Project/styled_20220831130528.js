import styled from "styled-components";

export const Tab = styled.button`
  font-size: 20px;
  padding: 10px 50px;
  cursor: pointer;
  opacity: 0.6;
  display: flex;
  background: transparent;
  border: 0;
  outline: 0;
  @media (max-width: 760px) {
    margin: auto;
  }
  ${({ active }) =>
    active &&
    `
    border-bottom: 4px solid #44566c;
    opacity: 1;
  `}
`;
export const ButtonGroup = styled.div`
  margin-top: 4px;
  margin-left: 30px;
  display: flex;
  background-color: transparent;
  @media (max-width: 760px) {
    margin-top: 20px;
    display: block;
  }
`;
