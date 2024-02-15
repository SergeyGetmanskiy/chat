import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { FormInputProps } from "./FormInputProps";

export const TextFieldElement = ({ type, name, control, label, required, minLength, maxLength }: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: {
          value: required,
          message: "Поле не может быть пустым"
        },
        minLength: {
          value: minLength,
          message: `Длина должна быть не менее ${minLength} символов`
        },
        maxLength: {
          value: maxLength,
          message: `Длина должна быть не более ${maxLength} символов`
        }
      }}
      render={({
        field: { onChange, value },
        fieldState: { error },
      }) => (
        <TextField
          type={type}
          value={value}
          onChange={onChange}
          label={label}
          helperText={error ? error.message : null}
          error={!!error}
          size="small"
          fullWidth
          variant="outlined"
        />
      )}
    />
  );
};
