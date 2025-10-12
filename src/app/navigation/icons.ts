import { UserIcon as HiUserIcon, HomeIcon } from "@heroicons/react/24/outline";
import { ElementType } from "react";

import DashboardsIcon from "@/assets/dualicons/dashboards.svg?react";
import SettingIcon from "@/assets/dualicons/setting.svg?react";

import DashboardLottie from "@/assets/unicorn-icons/dashboards.json";
import HomeLottie from "@/assets/unicorn-icons/home.json";
import SettingsLottie from "@/assets/unicorn-icons/settings.json";

import DashboardLottieDark from "@/assets/unicorn-icons/dashboards-dark.json";
import HomeLottieDark from "@/assets/unicorn-icons/home-dark.json";
import SettingsLottieDark from "@/assets/unicorn-icons/settings-dark.json";


export const navigationIcons: Record<string, ElementType> = {
  dashboards: DashboardsIcon,
  settings: SettingIcon,
  "dashboards.home": HomeIcon,
  "settings.general": HiUserIcon,
};

export const navigationLottieIcons: Record<string, any> = {
  dashboards: {
    light: DashboardLottie,
    dark: DashboardLottieDark,
  },
  settings: {
    light: SettingsLottie,
    dark: SettingsLottieDark,
  },
  "dashboards.home": {
    light: HomeLottie,
    dark: HomeLottieDark,
  },
  "settings.general": {
    light: SettingsLottie,
    dark: SettingsLottieDark,
  },
};