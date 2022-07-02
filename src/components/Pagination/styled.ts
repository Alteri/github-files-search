import styled, { css } from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const PaginationList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`;

export const PaginationItem = styled.li<{ currentPage: boolean }>`
  padding: 8px;
  color: #c1c1c1;
  cursor: pointer;

  ${({ currentPage }) =>
    currentPage &&
    css`
      border: 1px solid #000;
      border-radius: 2px;
      color: #000;
    `}

  &:hover {
    background: #ececec;
  }
`;
