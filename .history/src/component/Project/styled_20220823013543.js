import styled from "styled-components";

export const Tab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  display: flex;
  background: transparent;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 4px solid #44566c;
    opacity: 1;
  `}
`;
export const ButtonGroup = styled.div`
  margin-top: 2px;
  display: flex;
  background-color: transparent;
`;
