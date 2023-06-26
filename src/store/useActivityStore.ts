import { Activity } from "@/interfaces";
import { create } from "zustand";

interface ActivityStore {
  activities: Activity[];
  activity: string;

  setHours: (activityId: string, userId: string, hours: number) => void;
  setActivities: () => void;
}

export const useActivityStore = create<ActivityStore>((set, get) => ({
  activity: "",
  activities: [],

  setHours: (activityId: string, userId: string, hours: number) => {
    get().activities.map(async (activity) => {
      if (activity._id === activityId) {
        activity.hours += hours;
        set({ activities: get().activities });
        const response = await fetch("/api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ hours, activityId, userId }),
        });
        const data = await response.json();
        localStorage.setItem(
          "Activities",
          JSON.stringify(data.user.activities)
        );
      }
    });
  },

  setActivities: () => {
    try {
      localStorage.getItem("Activities") &&
        set({
          activities: JSON.parse(localStorage.getItem("Activities") as string),
        });
    } catch (error) {
      console.log(error);
    }
  },
}));
