import StyledButton from "./styled";
import { TProps } from "./types";

const Button = ({ children, variant }: TProps) => {
  return <StyledButton $variant={variant}>{children}</StyledButton>;
};

export default Button;
