import styled from "styled-components";

const HEADER_MAX_WIDTH = "30%";

export const Container = styled.section``;

export const Header = styled.h2`
  max-width: ${HEADER_MAX_WIDTH};

  margin-bottom: ${({ theme: { size } }) => size.px50};
  padding: ${({ theme: { size } }) => size.px20};

  border-bottom: 1px solid ${({ theme }) => theme.color.gray};

  font-family: ${({ theme: { font } }) => font.fontFamily.robotoSerif};
  font-size: ${({ theme: { font } }) => font.fontSize.l};
  font-weight: ${({ theme: { font } }) => font.fontWeight.bold};
  text-align: center;
`;
