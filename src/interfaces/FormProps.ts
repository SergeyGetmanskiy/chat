import { ReactNode } from "react"
import { Control, FieldValues } from "react-hook-form"

export interface FormProps {
  step?: number;
  formName?: string;
  control:  Control<FieldValues>;
  children?: ReactNode;
}
