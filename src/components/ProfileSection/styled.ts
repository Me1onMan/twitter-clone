import styled from "styled-components";

import { TTextParams } from "./types";

const ABOUT_CONTAINER_MARGIN_TOP = "-55px";

export const Header = styled.header``;

export const ProfileName = styled.h2<TTextParams>``;

export const AdditionalText = styled.p<TTextParams>`
  color: ${({ theme: { color } }) => color.blackT60};
`;

export const Text = styled.p<TTextParams>``;

export const BackgroundImg = styled.img``;

export const ProfileInfo = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ProfileContainer = styled.section`
  display: flex;
  justify-content: space-between;

  padding: ${({ theme: { size } }) => size.px16};
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: { size } }) => size.px8};

  margin-top: ${ABOUT_CONTAINER_MARGIN_TOP};
`;

export const Avatar = styled.img``;

export const FollowContainer = styled.div`
  display: flex;
  gap: ${({ theme: { size } }) => size.px6};

  margin-top: ${({ theme: { size } }) => size.px50};
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-gap: ${({ theme: { size } }) => size.px16};

  & button {
    height: ${({ theme: { size } }) => size.px44};
    padding: ${({ theme: { size } }) => size.px8} ${({ theme: { size } }) => size.px16};
  }
`;
