import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import MainNews from "../components/MainNews";
import Register from "../components/Register";
import Login from "../components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <MainNews />,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "news",
    element: <h1>News</h1>,
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children:[
      {
        path:'/auth/signUp',
        element:<Register/>
      },      {
        path:'/auth/login',
        element:<Login/>
      },
    ]
  },
]);

export default router;
