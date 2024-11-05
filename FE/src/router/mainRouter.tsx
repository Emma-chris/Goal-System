import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import MainLayout from "../Layout/mainLayout";
import HomePage from "../Pages/home/HomePage";
import RegisterScreen from "../Pages/auth/RegisterScreen";
import AuthLayout from "../Layout/authLayout";
import LoginScreen from "../Pages/auth/LoginScreen";
import LandingScreen from "../Pages/Screen/LandingScreen";

const mainRouter = createBrowserRouter([
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <RegisterScreen />,
      },
      {
        index: true,
        path: "login",
        element: <LoginScreen />,
      },
    ],
  },
  {
    path: "/",
    element: <LandingScreen />,
  },
]);
export default mainRouter;
