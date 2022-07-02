import styled from "styled-components";
import { GridStyled } from "../Grid/styled";
import { Colors } from "../Global";

export const Label = styled(GridStyled)``;

export const SelectStyled = styled.select`
  padding: 8px;
  border-radius: 0;
  border: 1px solid ${Colors.gray};

  &:focus {
    outline: none;
    border: 1px solid ${Colors.primaryColor};
  }
`;
