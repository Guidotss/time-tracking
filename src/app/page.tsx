"use client"
import { UserCard } from "@/components/user";
import { LogOutButton } from "@/components/ui";
import { useActivityStore } from "@/store";
import { TimeCard } from "@/components/time";


export default function Home() {
  const { activities } = useActivityStore();
  return (
    <main className="flex items-center justify-center w-full h-screen overflow-hidden">
      <header className="absolute 2xl:top-6 sm:top-3 right-10">
        <LogOutButton/>
      </header>
      <UserCard/>
      <div className="justify-center items-center flex-wrap flex 2xl:w-1/2 sm:mt-14">
        {activities.map((activity) => (
          <TimeCard activity={ activity } key={activity.id} />
        ))}
      </div>
    </main>
  )
}
