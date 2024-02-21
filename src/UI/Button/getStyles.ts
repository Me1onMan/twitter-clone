import { DefaultTheme } from "styled-components";

import { TButtonVariants } from "./types";

type TStyleValue = ({ theme }: DefaultTheme) => string;

const white = ({ theme }: DefaultTheme): string => theme.color.white;
const black = ({ theme }: DefaultTheme): string => theme.color.black;
const gray = ({ theme }: DefaultTheme): string => theme.color.gray;
const blue = ({ theme }: DefaultTheme): string => theme.color.blue;
const lightBlue = ({ theme }: DefaultTheme): string => theme.color.lightBlue;

export const getBgColor = (variant: TButtonVariants, isDisabled: boolean = false): TStyleValue => {
  switch (true) {
    case isDisabled:
      return lightBlue;
    case variant === "primary":
      return blue;
    case variant === "outlined":
      return white;
    default:
      return gray;
  }
};

export const getTextColor = (variant: TButtonVariants, isDisabled: boolean): TStyleValue => {
  switch (true) {
    case isDisabled:
      return black;
    case variant === "primary":
      return white;
    default:
      return black;
  }
};
