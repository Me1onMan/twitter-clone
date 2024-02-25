import styled from "styled-components";

import { TStyledContainerProps } from "./types";

const MAIN_MAX_WIDTH = "750px";
const VERTICAL_MARGIN = "105px";
const MAIN_PADDING = " 30px 40px";
const MAIN_GAP = "40px";

const MONTH_SELECT_MAX_WIDTH = "312px";
const GRID_GAP = "20px";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${MAIN_GAP};
  max-width: ${MAIN_MAX_WIDTH};

  margin: ${VERTICAL_MARGIN} auto;
  padding: ${MAIN_PADDING};
`;

export const Img = styled.img`
  align-self: center;
`;

export const H1 = styled.h1`
  font-family: ${({ theme: { font } }) => font.fontFamily.robotoSerif};
`;

export const InputContainer = styled.div<TStyledContainerProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap};

  & a {
    color: ${({ theme: { color } }) => color.blue};
  }
`;

export const H3 = styled.h3`
  font-family: ${({ theme: { font } }) => font.fontFamily.robotoSerif};
`;

export const Explanation = styled.p`
  font-size: ${({ theme: { font } }) => font.fontSize.m};
  font-weight: ${({ theme: { font } }) => font.fontWeight.light};
  color: ${({ theme: { color } }) => color.gray3};
`;

export const SelectDateContainer = styled.div`
  display: grid;
  grid-template-columns: ${MONTH_SELECT_MAX_WIDTH} 1fr 1fr;
  grid-gap: ${GRID_GAP};
`;
