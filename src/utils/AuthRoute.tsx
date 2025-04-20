import { Navigate, Outlet } from "react-router";

import { useAuth } from "@/context/Auth.context";

type AuthRouteProps = {
  redirectPath: string;
};

const AuthRoute = ({ redirectPath }: AuthRouteProps) => {
  const { loggedIn } = useAuth();

  if (loggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default AuthRoute;
