import { useSelector } from "react-redux";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { selectTheme } from "@/store/slices/themeSlice";
import GlobalStyle from "@/theme/globals";
import { DARK_THEME, LIGHT_THEME } from "@/theme/theme";

type TThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: TThemeProviderProps) => {
  const currentTheme = useSelector(selectTheme);

  return (
    <StyledThemeProvider theme={currentTheme === "dark" ? DARK_THEME : LIGHT_THEME}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
