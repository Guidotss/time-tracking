"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store";

interface UserInfo {
  name: string;
  lastName: string;
  password: string;
}

export default function RegisterPage() {
  const { register } = useAuthStore();
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    lastName: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userInfo.name || !userInfo.password)
      return alert("Please fill all the fields");

    const ok = await register(userInfo);
    if (!ok) return alert("An error ocurred");
    router.push("/");
  };

  return (
    <main className="flex items-center justify-center w-full h-screen">
      <form
        className="bg-dark_blue p-10 2xl:h-1/2 2xl:w-1/2 shadow-md flex flex-col items-center rounded-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl text-white text-center tracking-widest mb-5 ">
          Register
        </h1>
        <div className="flex items-center gap-2">
          <input
            className="2xl:w-1/2 mt-10 p-3 rounded-md bg-gray-700 text-white"
            type="text"
            placeholder="Guido..."
            value={userInfo.name}
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          />
          <input
            className="2xl:w-1/2 mt-10 p-3 rounded-md bg-gray-700 text-white"
            type="text"
            placeholder="Olguin..."
            value={userInfo.lastName}
            onChange={(e) =>
              setUserInfo({ ...userInfo, lastName: e.target.value })
            }
          />
        </div>
        <input
          className="2xl:w-1/2 sm:w-[420px] mt-10 p-3 rounded-md bg-gray-700 text-white"
          type="password"
          placeholder="**********"
          value={userInfo.password}
          autoComplete="false"
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
        />
        <button className="bg-soft_orange sm:w-[300px] py-2 rounded-lg mt-10 text-slate-50 hover:opacity-[0.8] transition-all">
          Register
        </button>
        <div className="w-full text-end mt-10">
          <Link href="/login">
            <span className="text-slate-50 underline">Ya tienes cuenta?</span>
          </Link>
        </div>
      </form>
    </main>
  );
}
