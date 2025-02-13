import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "../hooks/use-auth-store";
import { axiosInstance } from "../lib/axiosInstance";
import { useEffect } from "react";

const ProtectedLayout = () => {
  const { setUser, user, isPending, setIsPending } = useAuthStore();

  useEffect(() => {
    const getAuthUser = async () => {
      setIsPending(true);
      try {
        const { data } = await axiosInstance.get("/auth/user");
        setUser(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsPending(false);
      }
    };

    getAuthUser();
  }, [setUser, setIsPending]);

  if(isPending) {
    return <div>Loading...</div>
  }

  if (!user) {
    console.log("triggger this......")
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default ProtectedLayout;
