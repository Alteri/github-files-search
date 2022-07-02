import styled from "styled-components";
import { Colors } from "../Global";

export const ButtonStyled = styled.button`
  background: ${Colors.primaryColor};
  color: ${Colors.white};
  border: 0;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${Colors.primaryHover};
  }
`;
