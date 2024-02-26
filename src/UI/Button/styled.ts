import styled from "styled-components";

import { getBgColor, getTextColor } from "./getStyles";
import { TStyledProps } from "./types";

const StyledButton = styled.button<TStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ theme }) => theme.size.perc100};
  height: ${({ theme }) => theme.size.px60};

  background-color: ${({ $variant }) => {
    // console.log("disabled:", disabled);

    return getBgColor($variant);
  }};

  border: ${({ $variant, theme }) =>
    $variant === "outlined" ? `1px solid ${theme.color.gray}` : "none"};
  border-radius: ${({ theme }) => theme.size.px50};

  font-size: ${({ theme: { font } }) => font.fontSize.l};
  font-weight: ${({ theme: { font } }) => font.fontWeight.bold};
  color: ${({ $variant }) => getTextColor($variant)};

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme: { color } }) => color.lightBlue};
  }
`;

export default StyledButton;
