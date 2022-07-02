import React, { ReactNode } from "react";
import { PageStyled } from "./styled";

type PageProps = {
  children: ReactNode;
};

const Page = ({ children }: PageProps) => {
  return <PageStyled>{children}</PageStyled>;
};

export default Page;
