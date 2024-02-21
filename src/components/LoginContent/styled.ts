import styled from "styled-components";

const MAX_WIDTH_MAIN = "450px";
const VERTICAL_MARGIN = "60px";
const GAP = "40px";
const IMAGE_WIDTH = "50px";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${GAP};

  max-width: ${MAX_WIDTH_MAIN};

  margin: ${VERTICAL_MARGIN} auto;
`;

export const Img = styled.img`
  width: ${IMAGE_WIDTH};
`;

export const StyledH1 = styled.h1`
  font-size: ${({ theme: { font } }) => font.fontSize.xl3};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: { size } }) => size.px24};
`;

export const Link = styled.a`
  align-self: flex-end;

  color: ${({ theme: { color } }) => color.blue};
`;
