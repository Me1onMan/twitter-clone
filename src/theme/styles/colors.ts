type TColors = {
  [code: string]: string;
};

const COLORS: TColors = {
  white: "#FFF", // bgColor main
  white2: "#C4C4C4", // bgColor button welcome

  gray: "#E4EAED", // welcome button border
  gray2: "#B3B8BB", // logOut button bgColor
  gray3: "#828282", // textColor input placeholder (new tweet)

  blue: "#1E97E1", // welcome
  blue2: "#1DA1F2", // login

  darkBlue: "#14202a", // bgColor dark

  black: "#000",
  blackT60: "rgba(0, 0, 0, 0.6)", // input text
  blackT20: "rgba(0, 0, 0, 0.2)", // input border
};

export default COLORS;
