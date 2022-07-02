import React from "react";
import { Controller } from "react-hook-form";
import { Label, SelectStyled } from "./styled";

type SelectProps = {
  name: string;
  label?: string;
  options: { value: string; label: string }[];
};

const Select = ({ name, label, options }: SelectProps) => {
  return (
    <Label gap="4" as="label">
      {label && <p>{label}</p>}
      <Controller
        name={name}
        render={({ field }) => {
          return (
            <SelectStyled
              defaultValue={field.value}
              onChange={(e) => field.onChange(e.target.value)}
            >
              {options.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </SelectStyled>
          );
        }}
      />
    </Label>
  );
};

export default Select;
