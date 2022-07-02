import React, { ReactNode } from "react";
import { GridStyled } from "./styled";
import { AlignContent, JustifyContent } from "./types";

type GridProps = {
  children: ReactNode;
  gap?: string;
  templateColumns?: string;
  alignContent?: AlignContent;
  justifyContent?: JustifyContent;
  onAction?: () => void;
};

const Grid = ({
  children,
  gap,
  templateColumns,
  alignContent,
  justifyContent,
  onAction,
}: GridProps) => {
  return (
    <GridStyled
      gap={gap}
      templateColumns={templateColumns}
      alignContent={alignContent}
      justifyContent={justifyContent}
      onClick={onAction}
    >
      {children}
    </GridStyled>
  );
};

export default Grid;
