import StyledButton from "./styled";
import { TProps } from "./types";

const Button = ({ children, variant, onClick, disabled = false, type = "button" }: TProps) => {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled} $variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;
