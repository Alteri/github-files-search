import React, { useCallback } from "react";
import { FillesProps } from "../../types";
import { Text } from "../Text";
import { Colors } from "../Global";

type ValidationProps = {
  data?: FillesProps;
};

const Validation = ({ data }: ValidationProps) => {
  const getValidation = useCallback(() => {
    if (data?.message) {
      return data?.message;
    } else {
      return "No result";
    }
  }, [data]);
  return (
    <Text color={Colors.red} textAlign="center">
      {getValidation()}
    </Text>
  );
};

export default Validation;
