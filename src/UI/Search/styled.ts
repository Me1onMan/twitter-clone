import styled from "styled-components";

export const SearchContainer = styled.div`
  cursor: text;

  display: flex;
  align-items: center;
  gap: ${({ theme: { size } }) => size.px20};

  padding: ${({ theme: { size } }) => size.px16} ${({ theme: { size } }) => size.px20};

  background-color: ${({ theme: { color } }) => color.bgColorSearch};

  border-radius: ${({ theme: { size } }) => size.px38};
`;

export const SearchIcon = styled.img`
  width: ${({ theme: { size } }) => size.px24};
  height: ${({ theme: { size } }) => size.px24};
`;

export const Input = styled.input`
  outline: none;

  width: ${({ theme: { size } }) => size.perc100};

  background: none;

  border: none;

  font-size: ${({ theme: { font } }) => font.fontSize.l};
`;
