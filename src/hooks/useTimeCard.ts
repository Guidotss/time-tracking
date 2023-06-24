import {
  ExerciseIcon,
  PlayIcon,
  SelfCareIcon,
  SocialIcon,
  StudyIcon,
  WorkIcon,
} from "@/components/ui";
import { useEffect, useState } from "react";

interface Theme {
  bg: string;
  icon: () => JSX.Element;
}

export const useTimeCard = (title: string) => {
  const [theme, setTheme] = useState<Theme>();

  const setThemeByTitle = (title: string) => {
    switch (title) {
      case "Work":
        setTheme({ bg: "bg-soft_orange", icon: WorkIcon });
        break;
      case "Study":
        setTheme({ bg: "bg-light_red", icon: StudyIcon });
        break;
      case "Play":
        setTheme({ bg: "bg-blue", icon: PlayIcon });
        break;
      case "Self Care":
        setTheme({ bg: "bg-soft_yellow", icon: SelfCareIcon });
        break;
      case "Social":
        setTheme({ bg: "bg-soft_violet", icon: SocialIcon });
        break;
      case "Exercise":
        setTheme({ bg: "bg-lime_green", icon: ExerciseIcon });
        break;
      default:
        setTheme({ bg: "bg-soft_orange", icon: WorkIcon });
        break;
    }
  };
  useEffect(() => {
    setThemeByTitle(title);
  }, [title]);

  return { theme };
};
