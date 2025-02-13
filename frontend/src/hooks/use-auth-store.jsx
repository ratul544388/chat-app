import { create } from "zustand";
// import { axiosInstance } from "../lib/axios.js";
// import { io } from "socket.io-client";

// const BASE_URL =
//   import.meta.env.MODE === "development" ? "http://localhost:5001" : "/";

export const useAuthStore = create((set) => ({
  isPending: true,
  setIsPending: (isPending) => {
    set({ isPending });
  },
  user: null,
  setUser: (user) => {
    set({ user });
  },
  // isSigningUp: false,
  // isLoggingIn: false,
  // isUpdatingProfile: false,
  // isCheckingAuth: true,
  // onlineUsers: [],
  // socket: null,

  // checkAuth: async () => {
  //   try {
  //     const res = await axiosInstance.get("/auth/check");
  //     set({ authUser: res.data });
  //     get().connectSocket();
  //   } catch (error) {
  //     console.log("Error in checkAuth:", error);
  //     set({ authUser: null });
  //   } finally {
  //     set({ isCheckingAuth: false });
  //   }
  // },

  // signup: async (data) => {
  //   set({ isSigningUp: true });
  //   try {
  //     const res = await axiosInstance.post("/auth/signup", data);
  //     set({ authUser: res.data });
  //     get().connectSocket();
  //   } catch (error) {
  //     console.log(error)
  //   } finally {
  //     set({ isSigningUp: false });
  //   }
  // },

  // login: async (data) => {
  //   set({ isLoggingIn: true });
  //   try {
  //     const res = await axiosInstance.post("/auth/login", data);
  //     set({ authUser: res.data });

  //     get().connectSocket();
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     set({ isLoggingIn: false });
  //   }
  // },

  // logout: async () => {
  //   try {
  //     await axiosInstance.post("/auth/logout");
  //     set({ authUser: null });
  //     get().disconnectSocket();
  //   } catch (error) {
  //     console.log(error)
  //   }
  // },

  // updateProfile: async (data) => {
  //   set({ isUpdatingProfile: true });
  //   try {
  //     const res = await axiosInstance.put("/auth/update-profile", data);
  //     set({ authUser: res.data });
  //   } catch (error) {
  //     console.log("error in update profile:", error);
  //   } finally {
  //     set({ isUpdatingProfile: false });
  //   }
  // },

  // connectSocket: () => {
  //   const { authUser } = get();
  //   if (!authUser || get().socket?.connected) return;

  //   const socket = io(BASE_URL, {
  //     query: {
  //       userId: authUser._id,
  //     },
  //   });
  //   socket.connect();

  //   set({ socket: socket });

  //   socket.on("getOnlineUsers", (userIds) => {
  //     set({ onlineUsers: userIds });
  //   });
  // },
  // disconnectSocket: () => {
  //   if (get().socket?.connected) get().socket.disconnect();
  // },
}));
