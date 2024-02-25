import bookmarksIcon from "@/assets/icons/bookmarks.svg";
import exploreIcon from "@/assets/icons/explore.svg";
import homeIcon from "@/assets/icons/home.svg";
import listsIcon from "@/assets/icons/lists.svg";
import messagesIcon from "@/assets/icons/messages.svg";
import moreIcon from "@/assets/icons/more.svg";
import notificationIcon from "@/assets/icons/notification.svg";
import profileIcon from "@/assets/icons/profile.svg";
import { PROFILE_ROUTE } from "@/router/routes";

type TNavItem = {
  title: string;
  pathTo: string;
  icon: string;
};

const navbarLinks: TNavItem[] = [
  {
    title: "Home",
    pathTo: PROFILE_ROUTE,
    icon: homeIcon,
  },
  {
    title: "Explore",
    pathTo: PROFILE_ROUTE,
    icon: exploreIcon,
  },
  {
    title: "Notification",
    pathTo: PROFILE_ROUTE,
    icon: notificationIcon,
  },
  {
    title: "Messages",
    pathTo: PROFILE_ROUTE,
    icon: messagesIcon,
  },
  {
    title: "Bookmarks",
    pathTo: PROFILE_ROUTE,
    icon: bookmarksIcon,
  },
  {
    title: "Lists",
    pathTo: PROFILE_ROUTE,
    icon: listsIcon,
  },
  {
    title: "Profile",
    pathTo: PROFILE_ROUTE,
    icon: profileIcon,
  },
  {
    title: "More",
    pathTo: PROFILE_ROUTE,
    icon: moreIcon,
  },
];

export default navbarLinks;
