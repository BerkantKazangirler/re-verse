import { HomePage } from "@/pages";
import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "@/layouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <HomePage /> },
      // { path: "*", element: <ErrorPage /> },
    ],
  },
]);
