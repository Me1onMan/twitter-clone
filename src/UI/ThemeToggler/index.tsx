import { useDispatch, useSelector } from "react-redux";

import { selectTheme, toggleTheme } from "@/store/slices/themeSlice";

import { Input, Slider, Switch } from "./styled";

const ThemeToggler = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <Switch>
      <Input type="checkbox" checked={theme === "light"} onChange={handleChange} />
      <Slider />
    </Switch>
  );
};

export default ThemeToggler;
