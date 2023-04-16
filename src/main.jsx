import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Layout/Main";
import Home from "./components/Home";
import Register from "./Register";
import Login from "./components/Login";
import AuthProviders from "./Providers/AuthProviders";
import Order from "./components/Order";
import PrivateRoutes from "./components/Routes/PrivateRoutes";
import Profile from "./components/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/order",
        element: (
          <PrivateRoutes>
            <Order />
          </PrivateRoutes>
        ),
      },
      {
        path: '/profile',
        element: <PrivateRoutes><Profile/></PrivateRoutes>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
