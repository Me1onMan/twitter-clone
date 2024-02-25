import { DefaultTheme } from "styled-components";

import { TButtonVariants } from "./types";

type TStyleValue = ({ theme }: DefaultTheme) => string;

const white = ({ theme }: DefaultTheme): string => theme.color.white;
const black = ({ theme }: DefaultTheme): string => theme.color.black;
const gray = ({ theme }: DefaultTheme): string => theme.color.gray2;
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
    case variant === "follow":
      return black;
    default:
      return gray;
  }
};

export const getTextColor = (
  variant: TButtonVariants,
  isDisabled: boolean = false,
): TStyleValue => {
  switch (true) {
    case isDisabled:
      return black;
    case variant === "primary":
    case variant === "secondary":
    case variant === "logout":
    case variant === "follow":
      return white;
    case variant === "outlined":
      return black;
    default:
      return white;
  }
};
