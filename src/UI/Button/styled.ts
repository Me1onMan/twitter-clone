import styled from "styled-components";

import { getBgColor } from "./getStyles";
import { TStyledProps } from "./types";

const StyledButton = styled.button<TStyledProps>`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ theme }) => theme.size.perc100};
  height: ${({ theme }) => theme.size.px60};

  background-color: ${({ $variant }) => getBgColor($variant)};

  border: ${({ $variant, theme }) =>
    $variant === "outlined" ? `1px solid ${theme.color.gray}` : "none"};
  border-radius: ${({ theme }) => theme.size.px50};
`;

export default StyledButton;
