import { UserCard } from "@/components/user";
import { TimeCard } from '../components/time/TimeCard';
import { activityName } from '@/constants'; 
import { LogOutButton } from "@/components/ui";

export default function Home() {
  
  return (
    <main className="flex items-center justify-center w-full h-screen overflow-hidden">
      <header className="absolute 2xl:top-6 sm:top-3 right-10">
        <LogOutButton/>
      </header>
      <UserCard/>
      <div className="justify-center items-center flex-wrap flex 2xl:w-1/2 sm:mt-14">
        {activityName.map((activity) => (
          <TimeCard title={activity} key={activity}/>
        ))}
      </div>
    </main>
  )
}
