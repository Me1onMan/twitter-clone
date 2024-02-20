import styled from "styled-components";

const borderLine = "1px solid";

const StyledInput = styled.input`
  outline: none;

  width: ${({ theme }) => theme.size.perc100};

  padding: ${({ theme: { size } }) => size.px24} ${({ theme: { size } }) => size.px20};

  border: ${borderLine} ${({ theme: { color } }) => color.blackT20};
  border-radius: ${({ theme: { size } }) => size.px6};

  font-size: ${({ theme: { font } }) => font.fontSize.l};
`;

export default StyledInput;
