import { ReactNode } from "react";

export type TButtonVariants = "primary" | "secondary" | "outlined" | "follow" | "logout";

export type TProps = {
  children: ReactNode;
  variant: TButtonVariants;
  onClick: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
};

export type TStyledProps = {
  $variant: TButtonVariants;
};
