import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import avatarIcon from "@/assets/images/avatar_small.png";
import twitterLogo from "@/assets/images/twitter-bird.png";
import navbarLinks from "@/constants/NavbarLinks";
import { LOGIN_ROUTE } from "@/router/routes";
import { selectUser, setUser } from "@/store/slices/userSlice";
import Button from "@/UI/Button";

import {
  Avatar,
  Container,
  Logo,
  Navbar,
  NavIcon,
  NavItem,
  NavList,
  ProfileContainer,
  ProfileEmail,
  ProfileInfo,
  ProfileName,
} from "./styled";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name: userName, email: userEmail } = useSelector(selectUser);
  const formattedUserEmail = `@${userEmail.split("@")[0]}`;

  const handleLogout = () => {
    dispatch(
      setUser({
        id: undefined,
        name: undefined,
        email: undefined,
        telephone: undefined,
        birthdate: undefined,
      }),
    );
    navigate(LOGIN_ROUTE);
  };

  return (
    <Container>
      <Logo src={twitterLogo} alt="Bird" title="Twitter" />
      <Navbar>
        <NavList>
          {navbarLinks.map((navbarItem) => (
            <NavItem key={navbarItem.title}>
              <Link to={navbarItem.pathTo}>
                <NavIcon src={navbarItem.icon} />
                {navbarItem.title}
              </Link>
            </NavItem>
          ))}
        </NavList>
      </Navbar>

      <Button variant="primary" onClick={() => undefined}>
        Tweet
      </Button>

      <ProfileContainer>
        <Avatar src={avatarIcon} alt="Cartoon man" title={userName} />
        <ProfileInfo>
          <ProfileName>{userName}</ProfileName>
          <ProfileEmail>{formattedUserEmail}</ProfileEmail>
        </ProfileInfo>
      </ProfileContainer>

      <Button variant="logout" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
};

export default Sidebar;
