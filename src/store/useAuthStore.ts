import { create } from "zustand";
import { User } from "@/interfaces";
import Cookies from "js-cookie";

interface UserStore {
  user: User | null;
  revalidate: () => void;
  logout: () => void;
  login: (user: User) => Promise<boolean>;
  register: (user: User) => Promise<boolean>;
}

export const useAuthStore = create<UserStore>((set) => ({
  user: null,
  logout: () => {
    set({ user: null });
    Cookies.remove("token");
  },
  login: async (user) => {
    const { name, password } = user;
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
      });
      const data = await response.json();
      if (response.status === 200) {
        set({ user: data });
        Cookies.set("token", data.token);
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      Cookies.remove("token");
      return false;
    }
  },
  register: async (user) => {
    const { name, password, lastName } = user;
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password, lastName }),
      });
      const data = await response.json(); 

      if (response.status === 200) {
        set({ user: data });
        Cookies.set("token", data.token);
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      Cookies.remove("token");
      return false;
    }
  },
  revalidate: async () => {
    const token = Cookies.get("token");
    if (!token) return;

    try {
      const response = await fetch("/api/auth/revalidate", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.status === 200) {
        set({ user: data });
        Cookies.set("token", data.token);
        set({ user: data.user });
        console.log(data);
      } else {
        Cookies.remove("token");
      }
    } catch (error) {
      console.log(error);
      Cookies.remove("token");
    }
  },
}));
