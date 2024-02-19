import { ReactNode, Dispatch, SetStateAction } from "react"
import { Control, FieldValues } from "react-hook-form"

export interface FormProps {
  step?: number;
  formName?: string;
  control:  Control<FieldValues>;
  setIsNextBtnActive: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
}
