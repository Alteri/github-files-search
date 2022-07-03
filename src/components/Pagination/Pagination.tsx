import React, { useMemo } from "react";
import { PaginationList, PaginationItem, PaginationWrapper } from "./styled";
import { Text } from "../Text";

type PaginationProps = {
  handleCurrentPage: (id: number) => void;
  currentPage: number;
  totalResults: number;
  perPage: number;
};

const Pagination = ({
  handleCurrentPage,
  currentPage,
  totalResults,
  perPage,
}: PaginationProps) => {
  const pageNumbers: number[] = [];
  const allPages = Math.ceil(totalResults / perPage);

  for (let i = 1; i <= allPages; i++) {
    pageNumbers.push(i);
  }

  const pageNumbersFilteres = useMemo(
    () =>
      pageNumbers.slice(
        currentPage <= 1 ? currentPage - 1 : currentPage - 2,
        currentPage <= 1 ? currentPage + 2 : currentPage + 1
      ),
    [pageNumbers]
  );

  return (
    <PaginationWrapper>
      <PaginationList>
        {pageNumbersFilteres.map((item: number) => (
          <PaginationItem
            key={item}
            currentPage={item == currentPage}
            onClick={() => handleCurrentPage(item)}
          >
            {item}
          </PaginationItem>
        ))}
      </PaginationList>
      <Text> / {pageNumbers.length}</Text>
    </PaginationWrapper>
  );
};

export default Pagination;
