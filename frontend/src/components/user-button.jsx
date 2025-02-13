import { useAuthStore } from "../hooks/use-auth-store";
import { axiosInstance } from "../lib/axiosInstance";
const UserButton = () => {
  const { setUser } = useAuthStore();
  const handleClick = async () => {
    await axiosInstance.post("/auth/logout");
    setUser(null);
  };
  return (
    <button onClick={handleClick} className="btn btn-primary">
      Logout
    </button>
  );
};

export default UserButton;
