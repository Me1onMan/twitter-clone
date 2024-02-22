import styled from "styled-components";

import { TStyledImgProps, TStyledTextProps } from "./types";

export const Container = styled.section`
  width: 100%;

  padding: ${({ theme: { size } }) => size.px50};
`;

export const Img = styled.img<TStyledImgProps>`
  /* background-color: ${({ theme: { color }, $color }) =>
    $color === "blue" ? color.blue : color.black}; */
`;

export const StyledH1 = styled.h1`
  margin-top: ${({ theme: { size } }) => size.px55};

  font-size: ${({ theme: { font } }) => font.fontSize.xl3};
`;

export const StyledH2 = styled.h2`
  margin-top: ${({ theme: { size } }) => size.px44};

  font-size: ${({ theme: { font } }) => font.fontSize.xl2};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: { size } }) => size.px20};

  width: ${({ theme: { size } }) => size.perc80};

  margin-top: ${({ theme: { size } }) => size.px31};
`;

export const Text = styled.p<TStyledTextProps>`
  max-width: ${({ theme: { size } }) => size.perc80};

  font-size: ${({ $fontSize }) => $fontSize};

  &:first-of-type {
    margin-top: ${({ theme: { size } }) => size.px31};
  }
  &:last-of-type {
    margin-top: ${({ theme: { size } }) => size.px20};
  }

  & a {
    color: ${({ theme: { color } }) => color.blue};
  }
`;
