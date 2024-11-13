import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "news",
    element: <h1>News</h1>,
  },
  {
    path: "auth",
    element: <h1>auth</h1>,
  },
]);

export default router;
