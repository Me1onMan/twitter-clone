import SearchSidebar from "@/components/SearchSidebar";
import Sidebar from "@/components/Sidebar";

import ProfilePageContainer from "./styled";

const ProfilePage = () => {
  return (
    <ProfilePageContainer>
      <Sidebar />
      <SearchSidebar />
    </ProfilePageContainer>
  );
};

export default ProfilePage;
