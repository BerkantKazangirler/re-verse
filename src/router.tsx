import { HomePage, LuxuryLanding } from "@/pages";
import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "@/layouts";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <LuxuryLanding /> },
      // { path: "*", element: <ErrorPage /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);
