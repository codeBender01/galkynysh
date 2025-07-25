import { useRoutes } from "react-router-dom";

import Auth from "../layouts/Auth";
import { Suspense, lazy } from "react";

import SignUp from "../pages/SignUp";

const SignIn = lazy(() => import("../pages/SignIn"));
const Verify = lazy(() => import("../pages/Verify"));
const PassportFile = lazy(() => import("../pages/PassportFile"));
const PassportInfo = lazy(() => import("../pages/PassportInfo"));
const OtherInfo = lazy(() => import("../pages/OtherInfo"));
const Home = lazy(() => import("../pages/Home"));

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <Suspense fallback={<div>Loading</div>}>
          <Auth />
        </Suspense>
      ),
      path: "/",
      children: [
        {
          element: <SignUp />,
          path: "/",
        },
        {
          element: <SignIn />,
          path: "/sign-in",
        },
        {
          element: <Verify />,
          path: "/verify",
        },
        {
          element: <PassportFile />,
          path: "/passport",
        },
        {
          element: <PassportInfo />,
          path: "/passport-info",
        },
        {
          element: <OtherInfo />,
          path: "/other-info",
        },
      ],
    },
    {
      element: (
        <Suspense fallback={<div>Loading</div>}>
          <Home />
        </Suspense>
      ),
      path: "/home",
    },
  ]);

  return routes;
}
