import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { WELCOME_ROUTE } from "./routes";

const RedirectComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(WELCOME_ROUTE);
  }, [navigate]);

  return null;
};

export default RedirectComponent;
