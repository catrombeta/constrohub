import { createSafeContext } from "@/utils/createSafeContext";

import {
  ThemeConfig,
  ThemeMode,
} from "@/configs/@types/theme";

export interface ThemeContextValue extends ThemeConfig {
  isDark: boolean;
  setThemeMode: (val: ThemeMode) => void;
  setSettings: React.Dispatch<React.SetStateAction<any>>;
}

export const [ThemeContext, useThemeContext] =
  createSafeContext<ThemeContextValue>(
    "useThemeContext must be used within ThemeProvider"
  );
