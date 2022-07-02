export type FillesProps = {
  total_count: number;
  items: {
    name: string;
    html_url: string;
    repository: {
      owner: { login: string; avatar_url: string; description: string };
    };
  }[];
  errors: {
    message: string;
  }[];
};

export const FORM_FIELDS = {
  SEARCH_INPUT: "query",
  USER_INPUT: "user",
  LANGUAGE_SELECT: "language",
  PER_PAGE_SELECT: "per_page",
} as const;

export type FormProps = {
  [FORM_FIELDS.SEARCH_INPUT]: string;
  [FORM_FIELDS.USER_INPUT]: string;
  [FORM_FIELDS.LANGUAGE_SELECT]: string;
  [FORM_FIELDS.PER_PAGE_SELECT]: string;
};

export const PER_PAGE_OPTIONS = [
  { label: "20", value: "20" },
  { label: "40", value: "40" },
  { label: "60", value: "60" },
];

export const LANGUAGE_OPTIONS = [
  { label: "All", value: "default" },
  { label: "go", value: "go" },
  { label: "java", value: "java" },
  { label: "javascript", value: "javascript" },
];
