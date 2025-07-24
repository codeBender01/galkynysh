import { useRoutes } from "react-router-dom";

import Auth from "../layouts/Auth";
import { Suspense, lazy } from "react";

import SignUp from "../pages/SignUp";

const SignIn = lazy(() => import("../pages/SignIn"));
const Verify = lazy(() => import("../pages/Verify"));

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
      ],
    },
  ]);

  return routes;
}
