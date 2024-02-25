import styled from "styled-components";

const CONTAINER_MAX_WIDTH = "290px";
const BUTTON_MAX_WIDTH = "230px";
const LOGO_WIDTH = "40px";
const PROFILE_MARGIN_TOP = "76px";

export const Container = styled.section`
  max-width: ${CONTAINER_MAX_WIDTH};

  padding: ${({ theme: { size } }) => size.px16};

  & > button {
    width: ${BUTTON_MAX_WIDTH};
  }

  & > button:first-of-type {
    margin-top: ${({ theme: { size } }) => size.px31};
  }

  & > button:last-of-type {
    margin-top: ${({ theme: { size } }) => size.px16};
  }
`;

export const Logo = styled.img`
  width: ${LOGO_WIDTH};
`;

export const Navbar = styled.nav`
  margin-top: ${({ theme: { size } }) => size.px50};
`;

export const NavList = styled.ul`
  display: grid;
  grid-gap: ${({ theme: { size } }) => size.px31};
`;

export const NavItem = styled.li`
  list-style: none;

  & a {
    display: flex;
    align-items: center;
    gap: ${({ theme: { size } }) => size.px20};

    color: ${({ theme: { color } }) => color.black};
  }
`;

export const NavIcon = styled.img``;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme: { size } }) => size.px38};

  margin-top: ${PROFILE_MARGIN_TOP};
  padding: ${({ theme: { size } }) => size.px20};
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
