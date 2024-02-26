import styled from "styled-components";

const Time = styled.p`
  font-size: ${({ theme: { font } }) => font.fontSize.l};
  font-weight: ${({ theme: { font } }) => font.fontWeight.regular};
  color: ${({ theme: { color } }) => color.blackT60};
`;

export default Time;
