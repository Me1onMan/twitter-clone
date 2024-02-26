import avatarImg from "@/assets/images/avatar-large.png";
import bgImg from "@/assets/images/profile-background.png";
import Button from "@/UI/Button";

import {
  AboutContainer,
  AdditionalText,
  Avatar,
  BackgroundImg,
  ButtonContainer,
  FollowContainer,
  Header,
  ProfileContainer,
  ProfileName,
  Text,
} from "./styled";

const profileMocked = {
  name: "Fyodor",
  email: "@fshklyar",
  postsCount: 1070,
};

const ProfileSection = () => {
  return (
    <>
      <Header>
        <ProfileName $fontSize="20px">{profileMocked.name}</ProfileName>
        <AdditionalText $fontSize="16px">{profileMocked.postsCount} posts</AdditionalText>
      </Header>

      <BackgroundImg src={bgImg} />

      <ProfileContainer>
        <AboutContainer>
          <Avatar src={avatarImg} />
          <ProfileName $fontSize="24px">{profileMocked.name}</ProfileName>
          <AdditionalText $fontSize="16px">{profileMocked.email}</AdditionalText>
          <Text $fontSize="18px">UX&UI designer at {profileMocked.email}</Text>
          <FollowContainer>
            <Text $fontSize="18px">67</Text>
            <AdditionalText $fontSize="18px">Following</AdditionalText>
            <Text $fontSize="18px">47</Text>
            <AdditionalText $fontSize="18px">Followers</AdditionalText>
          </FollowContainer>
        </AboutContainer>

        <ButtonContainer>
          <Button variant="outlined" onClick={() => undefined}>
            Edit profile
          </Button>
        </ButtonContainer>
      </ProfileContainer>
    </>
  );
};

export default ProfileSection;
