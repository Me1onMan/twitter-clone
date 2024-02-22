import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/welcome");
  }, [navigate]);

  return null; // или что-то другое, что не будет рендериться
};

export default RedirectComponent;
