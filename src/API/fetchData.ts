import { useCallback } from "react";

export const useGetFiles = () => {
  const getAllFiles = useCallback(
    async (
      query: string,
      page?: number,
      ...rest: {
        user?: string;
        language?: string;
        per_page?: string;
      }[]
    ) => {
      const { per_page, language, user } = rest[0];
      try {
        const url = `${process.env.REACT_APP_BASE_URL}search/code?q=${query}+user:${user}+language:${language}&page=${page}&per_page=${per_page}`;
        const res = await fetch(url);
        const data = await res.json();
        return data;
      } catch (err) {
        return err;
      }
    },
    []
  );

  return { getAllFiles };
};
