type TFonts = {
  fontFamily: { [code: string]: string };
  fontSize: { [code: string]: string };
  fontWeight: { [code: string]: number };
};

const FONTS: TFonts = {
  fontFamily: {
    roboto: "Roboto, sans-serif",
    robotoSerif: "Roboto Serif, serif",
  },
  fontSize: {
    xl4: "84px",
    xl3: "42px",
    xl2: "30px",
    xl: "20px",
    l: "18px",
    m: "16px",
    s: "14px",
    xs: "13px",
  },
  fontWeight: {
    xl: 900,
    l: 700,
    m: 500,
    s: 400,
    xs: 300,
  },
};

export default FONTS;
