import { Route, Routes } from "react-router-dom";
import {
  Dashboard,
  Home,
  Login,
  Logout,
  NotFound,
  Profile,
  Register,
  Settings,
} from "../pages";

// import { useAppSelector } from "../store/hooks";

const AppRoutes = () => {
  // const { user } = useAuth();
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Register />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
    {
      path: "/logout",
      element: <Logout />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
