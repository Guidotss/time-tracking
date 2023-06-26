"use client"
import { UserCard } from "@/components/user";
import { LogOutButton } from "@/components/ui";
import { useActivityStore } from "@/store";
import { TimeCard } from "@/components/time";
import { useEffect } from "react";


export default function Home() {
  const { activities, setActivities } = useActivityStore();


  useEffect(() => {
    setActivities();
  }, []);

  if (!activities) return null;


  return (
    <main className="flex items-center justify-center w-full h-screen overflow-hidden">
      <header className="absolute 2xl:top-6 sm:top-3 right-10">
        <LogOutButton />
      </header>
      <UserCard />
      <div className="justify-center items-center flex-wrap flex 2xl:w-1/2 sm:mt-14">
        {activities.map((activity) => (
          <TimeCard key={activity._id} activity={activity} />
        ))}
      </div>
    </main>
  )
}
