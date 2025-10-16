import { ElementType } from "react";
import { HiChartBar, HiUser, HiUsers } from "react-icons/hi2";
import { HomeIcon } from "@heroicons/react/24/outline";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

// Aqui você pode importar qualquer ícone de qualquer lib
// e adicionar ao objeto `navigationIcons`.

export const navigationIcons: Record<string, ElementType> = {
  dashboards: HiChartBar,
  settings: Cog6ToothIcon,
  "dashboards.home": HomeIcon,
  "settings.general": HiUser,
  "clients": HiUsers,
  "clients.list": HiUsers,
};
