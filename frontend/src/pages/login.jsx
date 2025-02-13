import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import Input from "../components/input";
import { axiosInstance } from "../lib/axiosInstance";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../../../backend/src/validations";
import { useAuthStore } from "../hooks/use-auth-store";

const Login = () => {
  const [isPending, setIsPending] = useState(false);
  const { setUser } = useAuthStore();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (values) => {
    setIsPending(true);
    try {
      const { data } = await axiosInstance.post("/auth/login", values);
      setUser(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 w-full max-w-[500px] mx-auto p-6 rounded-lg"
    >
      <Input
        placeholder="Enter your email"
        errors={errors}
        disabled={isPending}
        {...register("email")}
      />
      <Input
        errors={errors}
        type="password"
        placeholder="Enter your password"
        disabled={isPending}
        {...register("password")}
      />
      <button disabled={isPending} className="btn btn-primary">
        Login
      </button>
      <div className="text-center">
        Do not have an account?{" "}
        <Link to="/register" className="text-primary hover:underline">
          Register
        </Link>
      </div>
    </form>
  );
};

export default Login;
