import styled from "styled-components";

import { TStyledSelectProps } from "./types";

const borderLine = "1px solid";

export const StyledSelectContainer = styled.div<TStyledSelectProps>`
  width: ${({ $width }) => $width};
`;
export const StyledSelect = styled.select`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${({ theme: { size } }) => size.px20};

  border: ${borderLine} ${({ theme: { color } }) => color.blackT20};
  border-radius: ${({ theme: { size } }) => size.px6};

  width: ${({ theme: { size } }) => size.perc100};
`;
export const Option = styled.option``;
export const Arrow = styled.img``;
