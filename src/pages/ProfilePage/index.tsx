import ProfileSection from "@/components/ProfileSection";
import SearchSidebar from "@/components/SearchSidebar";
import Sidebar from "@/components/Sidebar";

import { Main, ProfilePageContainer } from "./styled";

const ProfilePage = () => {
  return (
    <ProfilePageContainer>
      <Sidebar />
      <Main>
        <ProfileSection />
      </Main>
      <SearchSidebar />
    </ProfilePageContainer>
  );
};

export default ProfilePage;
