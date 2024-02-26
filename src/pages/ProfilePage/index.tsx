import ProfileSection from "@/components/ProfileSection";
import SearchSidebar from "@/components/SearchSidebar";
import Sidebar from "@/components/Sidebar";
import TweetForm from "@/components/TweetForm";
import TweetsContainer from "@/components/TweetsContainer";

import { Main, ProfilePageContainer } from "./styled";

// const tweetsMocked = [
//   {
//     authorId: "Sr15vn0MJqRGpMMtEvlNuszKmQA2",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ratione facilis est vitae, animi enim odio officiis, ut aut dolorem nostrum sint? Veniam sapiente esse iure enim expedita, sed totam?",
//     createdAt: "2024-02-23",
//     // image:
//     // likedBy: accountId[]
//   },
//   {
//     authorId: "Sr15vn0MJqRGpMMtEvlNuszKmQA2",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ratione facilis est vitae, animi enim odio officiis, ut aut dolorem nostrum sint? Veniam sapiente esse iure enim expedita, sed totam?",
//     createdAt: "2024-02-23",
//   },
//   {
//     authorId: "Sr15vn0MJqRGpMMtEvlNuszKmQA2",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ratione facilis est vitae, animi enim odio officiis, ut aut dolorem nostrum sint? Veniam sapiente esse iure enim expedita, sed totam?",
//     createdAt: "2024-02-23",
//   },
// ];

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
