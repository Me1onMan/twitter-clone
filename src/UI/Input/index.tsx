import { forwardRef } from "react";

import StyledInput from "./styled";
import { TInputProps } from "./types";

const Input = forwardRef<HTMLInputElement, TInputProps>(function InputComponent(
  { placeholder = "", type = "text" },
  ref,
) {
  return <StyledInput placeholder={placeholder} type={type} ref={ref} />;
});

Input.displayName = "Input";

export default Input;
