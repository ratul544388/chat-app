import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "../hooks/use-auth-store";

const AuthLayout = () => {
  const { user } = useAuthStore();
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh_-_64px)]">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
