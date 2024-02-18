import { Control, FieldValues } from "react-hook-form";

export interface FormInputProps {
  type?: string;
  name: string;
  control: Control<FieldValues>;
  label?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}
