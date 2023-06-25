"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useAuthStore } from "@/store";

export const UserCard = () => {
  const [{ daily, weekly, monthly }, setTimeSelect] = useState({
    daily: true,
    weekly: false,
    monthly: false,
  });

  const { user, revalidate } = useAuthStore();

  useEffect(() => {
    revalidate();
  },[]); 

  return (
    <div className="flex flex-col sm:ml-10">
      <div className="bg-violet 2xl:h-[400px] 2xl:w-[270px] sm:w-[240px] sm:h-[300px] rounded-xl p-8 z-10">
        <div className="border-solid border-4 border-white rounded-full w-[100px] shadow-xl">
          <Image
            className="roudned-full"
            src="/images/image-jeremy.png"
            alt="Picture of the author"
            width={100}
            height={100}
          />
        </div>
        <div className="text-slate-50 mt-10 font-extralight">
          <span className="text-sm opacity-[0.8]">Report for</span>
          <h1 className="text-4xl">{ user?.name }</h1>
          <h1 className="text-4xl">{ user?.lastName }</h1>
        </div>
      </div>
      <div className="z-0 -mt-4 p-10 bg-dark_blue 2xl:h-[160px] rounded-b-xl">
        <ul className="flex flex-col gap-2 text-lg cursor-pointer transition-all">
          <li
            onClick={() =>
              setTimeSelect({
                daily: true,
                weekly: false,
                monthly: false,
              })
            }
          >
            <h4 className={`${daily ? "text-slate-50" : "text-gray-400 opacity-[0.6]"}`}>
              Daily
            </h4>
          </li>
          <li
            onClick={() =>
              setTimeSelect({
                daily: false,
                weekly: true,
                monthly: false,
              })
            }
          >
            <h4
              className={`${
                weekly ? "text-slate-50" : "text-gray-400 opacity-[0.6]"
              }`}
            >
              Weekly
            </h4>
          </li>
          <li
            onClick={() =>
              setTimeSelect({
                daily: false,
                weekly: false,
                monthly: true,
              })
            }
          >
            <h4
              className={`${
                monthly ? "text-slate-50" : "text-gray-400 opacity-[0.6]"
              }`}
            >
              Monthly
            </h4>
          </li>
        </ul>
      </div>
    </div>
  );
};
