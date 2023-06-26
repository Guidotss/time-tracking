import { FC, useState } from "react"

interface TimeSelectProps {
  setHoursSelected: (hour: number) => void
}

export const TimeSelect:FC<TimeSelectProps> = ({ setHoursSelected }) => {
  const hours = new Array(10).fill(0).map((_, i) => i+1);

  return (
    <div className="bg-dark_blue rounded-lg shadow-lg h-[200px] overflow-auto time-select-scroll ">
      <div className="p-4 flex flex-col items-center justify-center">
        <ul className="text-slate-50">
          {hours.map((hour) => (
            <li 
              key={hour} 
              className="hover:opacity-[0.5]"
              onClick={() => setHoursSelected(hour)}
            >
              <h4>+ {hour}</h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
