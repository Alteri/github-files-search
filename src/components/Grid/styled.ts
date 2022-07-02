import styled from "styled-components";
import { AlignContent, JustifyContent } from "./types";

export const GridStyled = styled.div<{
  gap?: string;
  templateColumns?: string;
  alignContent?: AlignContent;
  justifyContent?: JustifyContent;
}>`
  display: grid;

  ${({ gap }) => gap && `gap: ${gap}px;`}

  ${({ alignContent }) => alignContent && `align-items: ${alignContent};`}

  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
    
  ${({ templateColumns }) =>
    templateColumns && `grid-template-columns: ${templateColumns};`}
`;
