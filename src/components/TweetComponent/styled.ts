import styled from "styled-components";

export const Container = styled.article`
  display: grid;
  grid-template-columns: 1fr 90%;
  grid-gap: ${({ theme: { size } }) => size.px8};

  padding: ${({ theme: { size } }) => `${size.px8} ${size.px31} ${size.px20}`};

  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
`;

export const Avatar = styled.img``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: { size } }) => size.px6};
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme: { size } }) => size.px6};

  & > button {
    height: ${({ theme: { size } }) => size.perc100};
    margin-left: auto;
  }
`;

export const Author = styled.p`
  font-family: ${({ theme: { font } }) => font.fontFamily.robotoSerif};
  font-size: ${({ theme: { font } }) => font.fontSize.xl};
  font-weight: ${({ theme: { font } }) => font.fontWeight.bold};
`;

export const Email = styled.p`
  font-size: ${({ theme: { font } }) => font.fontSize.l};
  font-weight: ${({ theme: { font } }) => font.fontWeight.regular};
  color: ${({ theme: { color } }) => color.blackT60};
`;

export const PostText = styled.p``;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: ${({ theme: { size } }) => size.px44};

  background: none;
  border: none;
`;

export const HeartImg = styled.img``;

export const LikesCount = styled.p``;
