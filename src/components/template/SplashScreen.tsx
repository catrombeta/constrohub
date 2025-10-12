// Local Imports
import LogoWhite from "@/assets/logos/logo-text-white.svg";
import Logo from "@/assets/logos/logo-text.svg";
import { Progress } from "@/components/ui";

export function SplashScreen() {
  const isDarkMode = document.documentElement.classList.contains("dark");
  const logoSrc = isDarkMode ? LogoWhite : Logo;

  return (
    <>
      <div className="fixed grid h-full w-full place-content-center">
        <img src={logoSrc} className="size-28" />
        <Progress
          color="primary"
          isIndeterminate
          animationDuration="1s"
          className="mt-3 h-1"
        />
      </div>
    </>
  );
}
