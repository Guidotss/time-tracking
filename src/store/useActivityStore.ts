import { Activity } from '@/interfaces';
import { create } from 'zustand';


interface ActivityStore {
    activities: Activity[];
    activity: string;

    setHours: (activity: string,hours: number) => void;
}

export const useActivityStore = create<ActivityStore>((set, get) => ({
    activity: "",
    activities: [
        {
            id: "1",
            title: "Work",
            hours: 0
        },
        {
            id: "2",
            title: "Play",
            hours: 0
        },
        {
            id: "3",
            title: "Study",
            hours: 0
        },
        {
            id: "4",
            title: "Exercise",
            hours: 0
        },
        {
            id: "5",
            title: "Social",
            hours: 10
        },
        {
            id: "6",
            title: "Self Care",
            hours: 0
        }
    ],

    setHours: (title: string,hours: number) => {
        get().activities.map((activity) => {
            if (activity.title === title) {
                activity.hours+=hours;
                set({activities: get().activities});
            }
        });
        
    }

}))