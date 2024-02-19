import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { FormInputProps } from "./FormInputProps";

export const TextFieldElement = ({
  type, name, control, label, required=false, minLength=0, maxLength=100, min=0, max=100
}: FormInputProps) => {
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
          message: `Должно быть не менее ${minLength} символов`
        },
        maxLength: {
          value: maxLength,
          message: `Должно быть не более ${maxLength} символов`
        },
        min: {
          value: min,
          message: `Должно быть не меньше ${min}`
        },
        max: {
          value: max,
          message: `Должно быть не больше ${max}`
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
          sx={{'&.MuiTextField-root p': {
            position: 'absolute',
            bottom: '-20px',
            left: '-15px',
            width: 'max-content',
          }, mb: '10px'
        }}
        />
      )}
    />
  );
};
