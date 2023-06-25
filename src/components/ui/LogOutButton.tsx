"use client";
import { useRouter } from 'next/navigation';
import { useAuthStore } from "@/store";

export const LogOutButton = () => {
  const { logout } = useAuthStore();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push("/login");
  };
  return (
    <button
      className="text-white font-bold py-2 px-10  bg-soft_orange rounded-lg hover:opacity-[0.8] transition-all"
      onClick={handleLogout}
    >
      Log out
    </button>
  );
};
