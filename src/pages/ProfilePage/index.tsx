import ProfileSection from "@/components/ProfileSection";
import SearchSidebar from "@/components/SearchSidebar";
import Sidebar from "@/components/Sidebar";
import TweetForm from "@/components/TweetForm";
import TweetsContainer from "@/components/TweetsContainer";

import { Main, ProfilePageContainer } from "./styled";

const ProfilePage = () => {
  return (
    <ProfilePageContainer>
      <Sidebar />
      <Main>
        <ProfileSection />
        <TweetForm />
        <TweetsContainer />
      </Main>
      <SearchSidebar />
    </ProfilePageContainer>
  );
};

export default ProfilePage;
