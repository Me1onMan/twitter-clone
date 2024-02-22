import StyledButton from "./styled";
import { TProps } from "./types";

const Button = ({ children, variant, onClick }: TProps) => {
  return (
    <StyledButton $variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
