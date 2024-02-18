import { Controller } from "react-hook-form";
import { RadioGroup, Radio, FormControl, FormControlLabel, FormHelperText } from "@mui/material";
import { FormInputProps } from "./FormInputProps";

export const RadioGroupElement = ({ name, control, required }: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: {
          value: required,
          message: "Нужно выбрать одно из двух"
        },
      }}
      render={({
        field: { onChange, value },
        fieldState: { error },
      }) => (
        <FormControl error={!!error} variant="standard">
          <RadioGroup onChange={onChange} value={value} row>
            <FormControlLabel value="female" control={<Radio />} label="Женщина" />
            <FormControlLabel value="male" control={<Radio />} label="Мужчина" />
          </RadioGroup>
          <FormHelperText>{error}</FormHelperText>
        </FormControl>
      )}
    />
  );
};
