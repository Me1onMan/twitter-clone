import { DefaultTheme } from "styled-components";

import COLORS from "./styles/colors";

const BASE_THEME: DefaultTheme = {};

export const LIGHT_THEME = {
  ...BASE_THEME,
  bgColor: COLORS.white,
};

export const DARK_THEME = {
  ...BASE_THEME,
  bgColor: COLORS.darkBlue,
};
