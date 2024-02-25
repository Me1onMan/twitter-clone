import styled from "styled-components";

const CONTAINER_MAX_WIDTH = "380px";

export const Container = styled.section`
  max-width: ${CONTAINER_MAX_WIDTH};

  padding: ${({ theme: { size } }) => size.px16};
`;

export const MemesImg = styled.img`
  max-width: 100%;
  margin-top: ${({ theme: { size } }) => size.px31};
`;

export const RecommendationTitle = styled.h3`
  margin-top: ${({ theme: { size } }) => size.px20};
`;

export const RecommendationsContainer = styled.div`
  display: grid;
  grid-gap: ${({ theme: { size } }) => size.px24};

  margin-top: ${({ theme: { size } }) => size.px31};
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme: { size } }) => size.px16};

  & button {
    justify-self: flex-end;
    max-width: ${({ theme: { size } }) => size.px100};
    height: ${({ theme: { size } }) => size.px38};
  }
`;

export const Avatar = styled.img``;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: { size } }) => size.px4};
`;

export const ProfileName = styled.p`
  font-size: ${({ theme: { font } }) => font.fontSize.m};
`;

export const ProfileEmail = styled.p`
  font-size: ${({ theme: { font } }) => font.fontSize.m};
  color: ${({ theme: { color } }) => color.blackT60};
`;

export const ShowMoreButton = styled.button`
  margin-top: ${({ theme: { size } }) => size.px20};

  background: none;
  border: none;

  font-size: ${({ theme: { font } }) => font.fontSize.l};
  color: ${({ theme: { color } }) => color.blue};
`;
