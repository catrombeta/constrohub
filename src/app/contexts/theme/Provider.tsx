import { ReactNode, useLayoutEffect } from "react";

// Local Imports
import {
  ThemeConfig,
  ThemeMode
} from "@/configs/@types/theme";
import { defaultTheme } from "@/configs/theme";
import { useLocalStorage, useMediaQuery } from "@/hooks/index";
import { ThemeContext, type ThemeContextValue } from "./context";

// ----------------------------------------------------------------------

const initialState: ThemeContextValue = {
  ...defaultTheme,
  setThemeMode: () => {},
  isDark: false,
  setSettings: () => {},
};

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";

const _html = document?.documentElement;

export function ThemeProvider({ children }: { children: ReactNode }) {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);

  const [settings, setSettings] = useLocalStorage<ThemeConfig>("settings", {
    themeMode: initialState.themeMode,
    themeLayout: initialState.themeLayout,
    cardSkin: initialState.cardSkin,
    darkColorScheme: initialState.darkColorScheme,
    lightColorScheme: initialState.lightColorScheme,
    primaryColorScheme: initialState.primaryColorScheme,
    notification: { ...initialState.notification },
  });

  const isDark =
    (settings.themeMode === "system" && isDarkOS) ||
    settings.themeMode === "dark";

  const setThemeMode = (val: ThemeMode) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      themeMode: val,
    }));
  };

  useLayoutEffect(() => {
    if (isDark) _html?.classList.add("dark");
    else _html?.classList.remove("dark");
  }, [isDark]);

  useLayoutEffect(() => {
    _html!.dataset.themeLight = settings.lightColorScheme.name;
  }, [settings.lightColorScheme]);

  useLayoutEffect(() => {
    _html!.dataset.themeDark = settings.darkColorScheme.name;
  }, [settings.darkColorScheme]);

  useLayoutEffect(() => {
    _html!.dataset.themePrimary = settings.primaryColorScheme.name;
  }, [settings.primaryColorScheme]);

  useLayoutEffect(() => {
    _html!.dataset.cardSkin = settings.cardSkin;
  }, [settings.cardSkin]);

  useLayoutEffect(() => {
    if (document) document.body.dataset.layout = settings.themeLayout;
  }, [settings.themeLayout]);

  if (!children) {
    return null;
  }

  const contextValue: ThemeContextValue = {
    ...settings,
    isDark,
    setThemeMode,
    setSettings,
  };

  return <ThemeContext value={contextValue}>{children}</ThemeContext>;
}
