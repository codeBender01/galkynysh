import { useRoutes } from "react-router-dom";

import Auth from "../layouts/Auth";
import ClientDashboard from "../layouts/ClientDashboard";
import AdminLayout from "../layouts/Admin";
import { Suspense, lazy } from "react";

import SignUp from "../pages/SignUp";

const SignIn = lazy(() => import("../pages/SignIn"));
const Verify = lazy(() => import("../pages/Verify"));
const PassportFile = lazy(() => import("../pages/PassportFile"));
const PassportInfo = lazy(() => import("../pages/PassportInfo"));
const OtherInfo = lazy(() => import("../pages/OtherInfo"));
const Home = lazy(() => import("../pages/Home"));
const DashboardHome = lazy(() => import("../pages/Dashboard/Home"));
const Stats = lazy(() => import("../pages/Dashboard/Stats"));
const MyCards = lazy(() => import("../pages/Dashboard/MyCards"));
const Profile = lazy(() => import("../pages/Dashboard/Profile"));
const Pay = lazy(() => import("../pages/Dashboard/Pay"));
const SendMoney = lazy(() => import("../pages/Dashboard/Pay/SendMoney"));
const ReceiveMoney = lazy(() => import("../pages/Dashboard/Pay/ReceiveMoney"));
const Main = lazy(() => import("../pages/Admin/Main"));
const Users = lazy(() => import("../pages/Admin/Users"));
const ProfileAdmin = lazy(() => import("../pages/Admin/Profile"));

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
    {
      element: (
        <Suspense fallback={<div>Loading</div>}>
          <AdminLayout />
        </Suspense>
      ),
      path: "/admin",
      children: [
        {
          element: <Main />,
          path: "main",
        },
        {
          element: <Users />,
          path: "users",
        },
        {
          element: <ProfileAdmin />,
          path: "profile",
        },
      ],
    },
    {
      element: (
        <Suspense fallback={<div>Loading</div>}>
          <ClientDashboard />
        </Suspense>
      ),
      path: "/dashboard",
      children: [
        {
          element: <DashboardHome />,
          path: "home",
        },
        {
          element: <Stats />,
          path: "stats",
        },
        {
          element: <MyCards />,
          path: "my-cards",
        },
        {
          element: <Profile />,
          path: "profile",
        },
        {
          element: <Pay />,
          path: "pay",
        },
        {
          element: <SendMoney />,
          path: "pay/send",
        },
        {
          element: <ReceiveMoney />,
          path: "pay/receive",
        },
      ],
    },
  ]);

  return routes;
}
