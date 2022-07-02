import React from "react";
import { Controller } from "react-hook-form";
import { Label, InputStyled } from "./styled";
import { Text } from "../Text";
import { Colors } from "../Global";
import { Grid } from "../Grid";

type InputProps = {
  name: string;
  label?: string;
  reguired?: boolean;
};

const Input = ({ name, label, reguired }: InputProps) => {
  return (
    <Label gap="4" as="label">
      {label && <p>{label}</p>}
      <Controller
        name={name}
        rules={{ required: reguired }}
        render={({ field, formState: { errors, isSubmitted } }) => {
          const hasErrors = !!(isSubmitted && errors[name]);
          return (
            <Grid gap="4">
              <InputStyled type="text" {...field} />
              {hasErrors && (
                <Text color={Colors.red}>Reguired Field {label}</Text>
              )}
            </Grid>
          );
        }}
      />
    </Label>
  );
};

export default Input;
