import React, { useState, useMemo, useCallback } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import {
  FillesProps,
  FormProps,
  FORM_FIELDS,
  PER_PAGE_OPTIONS,
  LANGUAGE_OPTIONS,
} from "./types";
import { useGetFiles } from "./API/fetchData";
import { List } from "./components/List";
import { Pagination } from "./components/Pagination";
import { Page } from "./components/Page";
import { Input } from "./components/Input";
import { Select } from "./components/Select";
import { Grid } from "./components/Grid";
import { Text } from "./components/Text";
import { Button } from "./components/Button";
import { Validation } from "./components/Validation";

const App = () => {
  const { getAllFiles } = useGetFiles();
  const [allFilles, setAllFilles] = useState<FillesProps>();
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const params: any = {};
  searchParams.forEach((value, key) => {
    params[key] = value;
  });
  const { per_page, page, query, user, language } = params;

  const [currentPage, setCurrentPage] = useState(page ? page : 1);

  const handleCurrentPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
    setIsLoading(true);

    setSearchParams({
      query: query,
      user: user,
      language: language,
      per_page: per_page,
      page: pageIndex.toString(),
    });

    (async () => {
      const result = await getAllFiles(query, pageIndex, params);
      setAllFilles(result);
      setIsLoading(false);
    })();
  };

  const form = useForm({
    defaultValues: {
      [FORM_FIELDS.SEARCH_INPUT]: `${query ? query : ""}`,
      [FORM_FIELDS.USER_INPUT]: `${user ? user : ""}`,
      [FORM_FIELDS.LANGUAGE_SELECT]: `${language ? language : "default"}`,
      [FORM_FIELDS.PER_PAGE_SELECT]: `${per_page ? per_page : "20"}`,
    },
  });

  const {
    handleSubmit,
    watch,
    formState: { submitCount },
  } = form;

  const perPageValue = watch(FORM_FIELDS.PER_PAGE_SELECT);

  const onSubmit: SubmitHandler<FormProps> = useCallback((data) => {
    setSearchParams({
      query: data[FORM_FIELDS.SEARCH_INPUT],
      user: data[FORM_FIELDS.USER_INPUT],
      language: data[FORM_FIELDS.LANGUAGE_SELECT],
      per_page: data[FORM_FIELDS.PER_PAGE_SELECT],
      page: currentPage,
    });

    setCurrentPage(1);
    setIsLoading(true);

    (async () => {
      const result = await getAllFiles(data[FORM_FIELDS.SEARCH_INPUT], 1, data);
      setAllFilles(result);
      setIsLoading(false);
    })();
  }, []);

  const { fillerFiltered } = useMemo(() => {
    const perPage = per_page ? per_page : "20";
    const fillerFiltered = allFilles?.items?.map(
      (
        {
          name,
          html_url,
          repository: {
            description,
            owner: { login, avatar_url },
          },
        },
        index
      ) => ({
        id: index + 1 + ((page ? +page : +currentPage) * +perPage - +perPage),
        fileName: name,
        description,
        url: html_url,
        ownerName: login,
        avatar_url,
      })
    );
    return { fillerFiltered };
  }, [allFilles]);

  return (
    <Page>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid gap="16">
            <Grid templateColumns="repeat(2, 1fr)" gap="16">
              <Input
                reguired
                name={FORM_FIELDS.SEARCH_INPUT}
                label="Search code"
              />
              <Input reguired name={FORM_FIELDS.USER_INPUT} label="User" />
            </Grid>
            <Grid templateColumns="repeat(2, 1fr)" gap="16">
              <Select
                name={FORM_FIELDS.LANGUAGE_SELECT}
                options={LANGUAGE_OPTIONS}
                label="Language"
              />
              <Select
                name={FORM_FIELDS.PER_PAGE_SELECT}
                options={PER_PAGE_OPTIONS}
                label="Results per page"
              />
            </Grid>
            <Button>Szukaj</Button>
          </Grid>
        </form>
      </FormProvider>
      {!isLoading ? (
        <>
          {fillerFiltered?.length ? (
            <>
              <List options={fillerFiltered} />
              <Pagination
                totalResults={allFilles?.total_count || 0}
                handleCurrentPage={handleCurrentPage}
                currentPage={page ? +page : currentPage}
                perPage={+perPageValue}
              />
            </>
          ) : (
            <>{submitCount > 0 && <Validation data={allFilles} />}</>
          )}
        </>
      ) : (
        <Text textAlign="center">Loading...</Text>
      )}
    </Page>
  );
};

export default App;
