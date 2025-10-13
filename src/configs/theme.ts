import { colors } from "@/constants/colors";
import {
  DarkColor,
  LightColor,
  PrimaryColor,
  ThemeConfig,
} from "./@types/theme";

const DEFAULT_DARK_COLOR: DarkColor = "custom_dark";
const DEFAULT_LIGHT_COLOR: LightColor = "custom_light";
const DEFAULT_PRIMARY_COLOR: PrimaryColor = "custom";

// Default theme configuration
export const defaultTheme: ThemeConfig = {
  themeMode: "light",
  themeLayout: "main-layout",
  cardSkin: "shadow",

  darkColorScheme: {
    name: DEFAULT_DARK_COLOR,
    ...colors[DEFAULT_DARK_COLOR],
  },

  lightColorScheme: {
    name: DEFAULT_LIGHT_COLOR,
    ...colors[DEFAULT_LIGHT_COLOR],
  },

  primaryColorScheme: {
    name: DEFAULT_PRIMARY_COLOR,
    ...colors[DEFAULT_PRIMARY_COLOR],
  },

  notification: {
    isExpanded: false,
    position: "bottom-right",
    visibleToasts: 5,
  },
};
