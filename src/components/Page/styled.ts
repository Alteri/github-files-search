import styled from "styled-components";
import { Breakpoints } from "../Global";

export const PageStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;

  @media (min-width: ${Breakpoints.Desktop}) {
    max-width: 999px;
    margin: auto;
  }
`;
