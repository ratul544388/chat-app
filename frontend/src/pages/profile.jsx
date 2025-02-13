import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/input";
import { useAuthStore } from "../hooks/use-auth-store";
import { axiosInstance } from "../lib/axiosInstance";
import { RegisterSchema } from "../validations";
const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = async (values) => {
    setIsLoading(true);
    try {
      const { data } = await axiosInstance.post("/auth/signup", values);
      setUser(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 w-full max-w-[500px] mx-auto p-6 rounded-lg"
    >
      <Input
        type="text"
        placeholder="Enter your full name"
        errors={errors}
        {...register("name")}
        disabled={isLoading}
      />
      <Input
        placeholder="Enter your email"
        errors={errors}
        {...register("email")}
        disabled={isLoading}
      />
      <Input
        {...register("password")}
        type="password"
        placeholder="Enter your password"
        errors={errors}
        disabled={isLoading}
      />
      <button disabled={isLoading} className="btn btn-primary">
        Register
      </button>
    </form>
  );
};

export default Profile;
