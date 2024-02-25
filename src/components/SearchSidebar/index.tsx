import avatarIcon from "@/assets/images/avatar_small.png";
import memeImages from "@/assets/images/memes-preview.png";
import Button from "@/UI/Button";
import Search from "@/UI/Search";

import {
  Avatar,
  Container,
  MemesImg,
  ProfileContainer,
  ProfileEmail,
  ProfileInfo,
  ProfileName,
  RecommendationsContainer,
  RecommendationTitle,
  ShowMoreButton,
} from "./styled";

const profilesMocked = [
  {
    name: "Fyodor Shklyar",
    email: "@fshklyar",
  },
  {
    name: "Fyodor Shklyar",
    email: "@fshklyar1",
  },
  {
    name: "Fyodor Shklyar",
    email: "@fshklyar2",
  },
  {
    name: "Fyodor Shklyar",
    email: "@fshklyar3",
  },
  {
    name: "Fyodor Shklyar",
    email: "@fshklyar4",
  },
];

const SearchSidebar = () => {
  return (
    <Container>
      <Search />
      <MemesImg src={memeImages} alt="Memes" title="Memes" />
      <RecommendationTitle>You might like</RecommendationTitle>
      <RecommendationsContainer>
        {profilesMocked.map((profile) => (
          <ProfileContainer key={profile.email}>
            <Avatar src={avatarIcon} alt="Cartoon man" title="Fyodor Shklyar" />
            <ProfileInfo>
              <ProfileName>{profile.name}</ProfileName>
              <ProfileEmail>{profile.email}</ProfileEmail>
            </ProfileInfo>
            <Button variant="follow" onClick={() => undefined}>
              Follow
            </Button>
          </ProfileContainer>
        ))}
      </RecommendationsContainer>
      <ShowMoreButton>Show more</ShowMoreButton>
    </Container>
  );
};

export default SearchSidebar;
