import { UserCard } from "@/components/user";
import { TimeCard } from '../components/time/TimeCard';
import { activityName } from '@/constants'; 
import { LogOutButton } from "@/components/ui";

export default function Home() {
  
  return (
    <main className="flex items-center justify-center w-full h-screen">
      <header className="absolute top-6 right-10">
        <LogOutButton/>
      </header>
      <UserCard/>
      <div className="justify-center items-center flex-wrap flex 2xl:w-1/2">
        {activityName.map((activity) => (
          <TimeCard title={activity} key={activity}/>
        ))}
      </div>
    </main>
  )
}
