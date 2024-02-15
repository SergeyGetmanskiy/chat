export interface FormInputProps {
  type: string;
  name: string;
  control: unknown;
  label: string;
  required: boolean;
  minLength: number;
  maxLength?: number;
  setValue?: unknown;
}
