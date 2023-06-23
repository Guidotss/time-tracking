"use client";

import { FC } from "react";
import { useTimeCard } from "@/hooks";
import { EllipsisIcon } from '@/components/ui';



interface TimeCardProps {
  title: string;
}

export const TimeCard: FC<TimeCardProps> = ({ title }) => {

  const { theme } = useTimeCard(title);


  return (
    <div className="w-[300px] flex flex-col p-10 h-[300px]">
      <div className={`${theme?.bg} text-slate-50 h-[100px] flex justify-between rounded-xl z-0`}>
        <div/>
        <div className="mr-3">
          {theme?.icon()}
        </div>
      </div>
      <div className="bg-dark_blue z-10 flex flex-col p-7 justify-center rounded-xl -mt-14">
        <div className="flex justify-between">
          <h1 className="text-lg text-slate-50 font-light ">{title}</h1>
          <div className="cursor-pointer">
            <EllipsisIcon/>
          </div>
        </div>
        <h1 className="text-4xl text-slate-50 font-light mt-2">2hrs</h1>
        <h1 className="text-md text-slate-50 font-light mt-2 opacity-[0.4]">Last Week 5hs</h1>
      </div>
    </div>
  );
};
