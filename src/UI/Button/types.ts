import { ReactNode } from "react";

export type TButtonVariants = "primary" | "secondary" | "outlined" | "follow" | "logout";

export type TProps = {
  children: ReactNode;
  variant: TButtonVariants;
};

export type TStyledProps = {
  $variant: TButtonVariants;
};
