import { DefaultTheme } from "styled-components";

import COLORS from "./styles/colors";
import FONTS from "./styles/fonts";
import SIZES from "./styles/sizes";

const BASE_THEME: DefaultTheme = {
  size: {
    ...SIZES,
  },
  color: {
    ...COLORS,
  },
  font: {
    ...FONTS,
  },
};

export const LIGHT_THEME = {
  ...BASE_THEME,
  color: {
    ...BASE_THEME.color,
    bgColor: COLORS.white,
  },
};

export const DARK_THEME = {
  ...BASE_THEME,
  color: {
    ...BASE_THEME.color,
    bgColor: COLORS.darkBlue,
  },
};
