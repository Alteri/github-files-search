import React, { ReactNode } from "react";
import { TextStyled } from "./styled";

const textTypes = ["h1", "h2", "p"] as const;
export type TextType = typeof textTypes[number];

type TextProps = {
  children: ReactNode;
  textType?: TextType;
  color?: string;
  textAlign?: string;
};

const Text = ({
  children,
  textType = "p",
  color,
  textAlign,
  ...props
}: TextProps) => {
  return (
    <TextStyled
      as={textType}
      textType={textType}
      color={color}
      textAlign={textAlign}
      {...props}
    >
      {children}
    </TextStyled>
  );
};

export default Text;
