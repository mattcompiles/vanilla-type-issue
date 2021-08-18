import { createThemeContract, createTheme, style } from "@vanilla-extract/css";

export const contract = createThemeContract({
  color: {
    brand: null
  },
  font: {
    body: null
  }
});

export const [themeA, vars] = createTheme({
  color: {
    brand: "blue"
  },
  font: {
    body: "arial"
  }
});

export const themeB = createTheme(contract, {
  color: {
    brand: "pink"
  },
  font: {
    body: "comic sans ms"
  }
});

export const className = style({
  backgroundColor: contract.color.brand,
  color: contract.color.brand
});
