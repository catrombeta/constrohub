// Import Dependencies
import { lazy } from "react";
import { Outlet, ScrollRestoration } from "react-router";

// Local Imports
import { useAuthContext } from "@/app/contexts/auth/context";
import { Loadable } from "@/components/shared/Loadable";
import { Progress } from "@/components/template/Progress";
import { SplashScreen } from "@/components/template/SplashScreen";

const Toaster = Loadable(lazy(() => import("@/components/template/Toaster")));
// const Customizer = Loadable(
//   lazy(() => import("components/template/Customizer")),
// );
const Tooltip = Loadable(lazy(() => import("@/components/template/Tooltip")));

// ----------------------------------------------------------------------

function Root() {
  const { isInitialized } = useAuthContext();

  if (!isInitialized) {
    return <SplashScreen />;
  }

  return (
    <>
      <Progress />
      <ScrollRestoration />
      <Outlet />
      <Tooltip />
      <Toaster />
      {/* <Customizer /> */}
    </>
  );
}

export default Root;
