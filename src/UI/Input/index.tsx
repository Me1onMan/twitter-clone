import { ChangeEvent, forwardRef, useState } from "react";

import StyledInput from "./styled";
import { TInputProps } from "./types";

const Input = forwardRef<HTMLInputElement, TInputProps>(function InputComponent(
  { placeholder = "", type = "text", pattern = "" },
  ref,
) {
  const [inputText, setInputText] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <StyledInput
      value={inputText}
      onChange={handleChange}
      placeholder={placeholder}
      type={type}
      pattern={pattern}
      ref={ref}
    />
  );
});

Input.displayName = "Input";

export default Input;
