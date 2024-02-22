import styled from "styled-components";

export const Container = styled.footer`
  padding: ${({ theme: { size } }) => size.px20};
`;

export const LinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${({ theme: { size } }) => size.px20};
`;

export const LinkItem = styled.li`
  list-style: none;

  & a {
    color: ${({ theme: { color } }) => color.black};
  }
`;
