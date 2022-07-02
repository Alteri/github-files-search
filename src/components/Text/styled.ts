import styled, { css } from "styled-components";
import { TextType } from "./Text";

const getTextTypeStyle = (textType: TextType) => {
  switch (textType) {
    case "h1":
      return css`
        font-size: 36px;
      `;
    case "h2":
      return css`
        font-size: 28px;
        font-weight: 600;
      `;
    default:
      return css`
        font-size: 18px;
      `;
  }
};

export const TextStyled = styled.p<{
  textType?: TextType;
  color?: string;
  textAlign?: string;
  clamp?: number;
}>`
  line-height: 1.2;
  ${({ textType }) => textType && getTextTypeStyle(textType)}
  ${({ color }) => color && `color: ${color};`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
`;
