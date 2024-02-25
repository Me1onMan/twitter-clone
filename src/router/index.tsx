import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "@/pages/ErrorPage";
import Login from "@/pages/LoginPage";
import ProfilePage from "@/pages/ProfilePage";
import SignUp from "@/pages/SignUpPage";
import Welcome from "@/pages/WelcomePage";

import RedirectComponent from "./RedirectComponent";
import { BASE_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, SIGNUP_ROUTE, WELCOME_ROUTE } from "./routes";

const router = createBrowserRouter([
  {
    path: BASE_ROUTE,
    element: <RedirectComponent />,
    errorElement: <ErrorPage />,
  },
  {
    path: WELCOME_ROUTE,
    element: <Welcome />,
  },
  {
    path: SIGNUP_ROUTE,
    element: <SignUp />,
  },
  {
    path: LOGIN_ROUTE,
    element: <Login />,
  },
  {
    path: PROFILE_ROUTE,
    element: <ProfilePage />,
  },
]);

export default router;
