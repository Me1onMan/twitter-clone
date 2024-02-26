import ProfileSection from "@/components/ProfileSection";
import SearchSidebar from "@/components/SearchSidebar";
import Sidebar from "@/components/Sidebar";
import TweetForm from "@/components/TweetForm";

import { Main, ProfilePageContainer } from "./styled";

const ProfilePage = () => {
  return (
    <ProfilePageContainer>
      <Sidebar />
      <Main>
        <ProfileSection />
        <TweetForm />
      </Main>
      <SearchSidebar />
    </ProfilePageContainer>
  );
};

export default ProfilePage;
