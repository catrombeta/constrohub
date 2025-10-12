// Import Dependencies
import { useLayoutEffect, useState } from "react";
import { Outlet } from "react-router";

// Local Imports
import { useBreakpointsContext } from "@/app/contexts/breakpoint/context";
import { useSidebarContext } from "@/app/contexts/sidebar/context";
import { useThemeContext } from "@/app/contexts/theme/context";

// ----------------------------------------------------------------------

export function AppLayout() {
  const { themeLayout } = useThemeContext();
  const { close, open } = useSidebarContext();
  const { lgAndDown, xlAndUp } = useBreakpointsContext();
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    if (xlAndUp) open();
    return () => {
      if (lgAndDown) close();
    };
  }, [close, lgAndDown, open, xlAndUp]);

  useLayoutEffect(() => {
    if (document?.body?.dataset) {
      document.body.dataset.layout = "main-layout";

      // Fix flicker layout
      queueMicrotask(() => {
        document.body.dataset.layout = "main-layout";
      });

      return () => {
        document.body.dataset.layout = themeLayout;
      };
    }
  }, [themeLayout]);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <Outlet />;
}
