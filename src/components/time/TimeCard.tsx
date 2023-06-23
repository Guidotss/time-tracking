"use client";

import { FC, ReactElement, useEffect, useState } from "react";
import {
  WorkIcon,
  ExerciseIcon,
  PlayIcon,
  SelfCareIcon,
  SocialIcon,
  StudyIcon,
} from "../ui";
import { useTimeCard } from "@/hooks";
import Home from '../../app/page';
import { EllipsisIcon } from "../ui/EllipsisIcon";

interface TimeCardProps {
  title: string;
}

interface Theme {
  bg: string;
  icon: ReactElement;
}

export const TimeCard: FC<TimeCardProps> = ({ title }) => {
  //const [theme, setTheme] = useState<Theme>();

  const { theme } = useTimeCard(title);

/*   const setThemeByTitle = (title: string) => {
    switch (title) {
      case "Work":
        setTheme({ bg: "bg-soft_orange", icon: <WorkIcon /> });
        break;
      case "Study":
        setTheme({ bg: "bg-light_red", icon: <StudyIcon /> });
        break;
      case "Play":
        setTheme({ bg: "bg-blue", icon: <PlayIcon /> });
        break;
      case "Self Care":
        setTheme({ bg: "bg-soft_yellow", icon: <SelfCareIcon /> });
        break;
      case "Social":
        setTheme({ bg: "bg-soft_violet", icon: <SocialIcon /> });
        break;
      case "Exercise":
        setTheme({ bg: "bg-lime_green", icon: <ExerciseIcon /> });
        break;
      default:
        setTheme({ bg: "bg-soft_orange", icon: <WorkIcon /> });
        break;
    }
  };

  useEffect(() => {
    setThemeByTitle(title);
  },[title]); 
   */
  
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
