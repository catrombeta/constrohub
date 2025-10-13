// Import Dependencies
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router";

// Local Imports
import { NavigationTree } from "@/@types/navigation";
import { useThemeContext } from "@/app/contexts/theme/context";
import LogoWhite from "@/assets/logos/logo-white.png";
import Logo from "@/assets/logos/logo.png";
import { SegmentPath } from "..";
import { Profile } from "../../Profile";
import { Menu } from "./Menu";

// ----------------------------------------------------------------------

// Define Prop Types
interface MainPanelProps {
  nav: NavigationTree[];
  setActiveSegmentPath?: Dispatch<SetStateAction<SegmentPath>>;
  activeSegmentPath: SegmentPath;
}

export function MainPanel({
  nav,
  setActiveSegmentPath,
  activeSegmentPath,
}: MainPanelProps) {
  const { cardSkin, isDark } = useThemeContext();
  const logoSrc = isDark ? LogoWhite : Logo;

  return (
    <div className="main-panel">
      <div
        className={clsx(
          "border-gray-150 dark:border-dark-600/80 flex h-full w-full flex-col items-center bg-white ltr:border-r rtl:border-l",
          cardSkin === "shadow" ? "dark:bg-dark-750" : "dark:bg-dark-900",
        )}
      >
        <div className="flex pt-3.5">
          <Link to="/">
            <img src={logoSrc} alt="Logo" className="size-10" />
          </Link>
        </div>

        <Menu
          nav={nav}
          activeSegmentPath={activeSegmentPath}
          setActiveSegmentPath={setActiveSegmentPath}
        />

        <div className="flex flex-col items-center space-y-3 py-2.5">
          <Profile />
        </div>
      </div>
    </div>
  );
}
