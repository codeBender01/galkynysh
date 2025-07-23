import { useRoutes } from "react-router-dom";

import Login from "../layouts/Login";
import { Suspense } from "react";

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <Suspense fallback={<div>Loading</div>}>
          <Login />
        </Suspense>
      ),
      path: "/",
    },
  ]);

  return routes;
}
