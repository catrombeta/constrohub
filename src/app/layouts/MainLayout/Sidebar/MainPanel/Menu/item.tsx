// Import Dependencies
import clsx from "clsx";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { ComponentPropsWithoutRef, ElementType, useRef } from "react";
import { type To, useRouteLoaderData } from "react-router";

// Local Imports
import { useBreakpointsContext } from "@/app/contexts/breakpoint/context";
import { useThemeContext } from "@/app/contexts/theme/context";
import { navigationLottieIcons } from "@/app/navigation/icons";
import { Badge } from "@/components/ui";
import { ColorType } from "@/constants/app";
import { createScopedKeydownHandler } from "@/utils/dom/createScopedKeydownHandler";

// ----------------------------------------------------------------------

export interface ItemProps {
  id: string;
  title: string;
  to?: To;
  isActive?: boolean;
  icon?: string;
  component?: ElementType;
  onClick?: (path: string) => void;
  onKeyDown?: ComponentPropsWithoutRef<"button">["onKeyDown"];
}

export function Item({
  id,
  title,
  isActive,
  icon,
  component,
  onKeyDown,
  ...rest
}: ItemProps) {
  if (!icon || !navigationLottieIcons[icon]) {
    throw new Error(`Icon ${icon} not found in navigationIcons`);
  }

  const Element = component || "button";
  const { isDark } = useThemeContext();
  const { lgAndUp } = useBreakpointsContext();
  const info = useRouteLoaderData("root")?.[id]?.info as
    | { val?: string; color?: ColorType }
    | undefined;

  const IconSet = navigationLottieIcons[icon];
  const animationData = isDark ? IconSet.dark : IconSet.light;

   const lottieRef = useRef<LottieRefCurrentProps>(null);

  return (
    <Element
      data-root-menu-item
      data-tooltip={lgAndUp ? true : undefined}
      data-tooltip-content={title}
      data-tooltip-place="right"
      className={clsx(
        "relative flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-lg outline-hidden transition-colors duration-200",
        isActive
          ? "bg-primary-600/10 text-primary-600 dark:bg-primary-400/15 dark:text-primary-400"
          : "hover:bg-primary-600/20 focus:bg-primary-600/20 active:bg-primary-600/25 dark:text-dark-200 dark:hover:bg-dark-300/20 dark:focus:bg-dark-300/20 dark:active:bg-dark-300/25 text-gray-500",
      )}
      onKeyDown={createScopedKeydownHandler({
        siblingSelector: "[data-root-menu-item]",
        parentSelector: "[data-root-menu]",
        activateOnFocus: false,
        loop: true,
        orientation: "vertical",
        onKeyDown,
      })}
      onMouseEnter={() => lottieRef.current?.play()}
      onMouseLeave={() => lottieRef.current?.stop()}
      {...rest}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay={false}
        className="size-6"
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
        }}
      />
      {info?.val && (
        <Badge
          color={info.color}
          className="text-tiny-plus dark:ring-dark-800 absolute top-0 right-0 -m-1 h-4 min-w-[1rem] rounded-full px-1 py-0 ring-1 ring-white"
        >
          <span>{info.val}</span>
        </Badge>
      )}
    </Element>
  );
}
