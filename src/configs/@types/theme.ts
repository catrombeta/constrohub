import { ToasterProps } from "sonner";

export type DarkColor = "custom_dark";
export type LightColor = "custom_light";
export type PrimaryColor =
  | "indigo"
  | "blue"
  | "green"
  | "amber"
  | "purple"
  | "rose"
  | "lime"
  | "custom"
;

export type ThemeMode = "light" | "dark" | "system";
export type ThemeLayout = "main-layout";
export type CardSkin = "bordered" | "shadow";

export interface DarkColorScheme {
  name: DarkColor;
  [key: string]: string;
}

export interface LightColorScheme {
  name: LightColor;
  [key: string]: string;
}

export interface PrimaryColorScheme {
  name: PrimaryColor;
  [key: string]: string;
}

export interface Notification {
  isExpanded: boolean;
  position: ToasterProps["position"];
  visibleToasts: number;
}

export interface ThemeConfig {
  themeMode: ThemeMode;
  themeLayout: ThemeLayout;
  cardSkin: CardSkin;
  darkColorScheme: DarkColorScheme;
  lightColorScheme: LightColorScheme;
  primaryColorScheme: PrimaryColorScheme;
  notification: Notification;
}
