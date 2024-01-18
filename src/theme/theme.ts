import { colors } from "./default/colors";
import { typography } from "./default/typography";

const theme = {
  typography,
  colors,
}

export type Theme = typeof theme;
export type ThemeTypography = keyof typeof theme.typography.variants;

export default theme;
