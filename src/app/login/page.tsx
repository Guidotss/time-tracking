"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store";

interface UserInfo {
  name: string;
  lastName?: string;
  password: string;
}

export default function LoginPage() {
  const { login } = useAuthStore();
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userInfo.name || !userInfo.password)
      return alert("Please fill all the fields");
    const ok = await login(userInfo);
    if (!ok) return alert("An error ocurred");
    router.push("/");
  };

  return (
    <main className="flex items-center justify-center w-full h-screen">
      <form
        className="bg-dark_blue p-10 2xl:h-1/2 md:w-1/2 shadow-md flex flex-col items-center rounded-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl text-white text-center tracking-widest mb-5 mt-5">
          Login
        </h1>
        <input
          className="sm:w-1/2 mt-10 p-3 rounded-md bg-gray-700 text-white"
          type="text"
          placeholder="Guido Olguin..."
          value={userInfo.name}
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
        />
        <input
          className="sm:w-1/2 mt-10 p-3 rounded-md bg-gray-700 text-white"
          type="password"
          placeholder="**********"
          value={userInfo.password}
          autoComplete="false"
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
        />
        <button className="bg-soft_orange 2xl:w-[300px] sm:w-[280px] py-2 rounded-lg mt-10 text-slate-50 hover:opacity-[0.8] transition-all">
          Login
        </button>
        <div className="w-full text-end mt-10">
          <Link href="/register">
            <span className="text-slate-50 underline">
              Todavia no tiene cuenta?
            </span>
          </Link>
        </div>
      </form>
    </main>
  );
}
