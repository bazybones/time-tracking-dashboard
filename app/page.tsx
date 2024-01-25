"use client";
import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import TimeFrameCards from "./components/TimeFrameCards";

export default function Home() {
  const [isActive, setIsActive] = useState("Weekly");

  const changeTimeFrame = (newInterval: string) => {
    if (newInterval !== isActive) {
      setIsActive(newInterval);
    }
  };

  return (
    <div className="pt-[2rem] pb-[2rem] md:p-0 min-h-screen flex items-start md:items-center justify-center">
      <div className="ml-4 mr-4 md:ml-36 md:mr-36 min-h-[70vh] h-auto w-full grid gap-4 grid-cols-1 grid-rows-1 md:grid-cols-4 md:grid-rows-2 ">
        <ProfileCard isActive={isActive} changeTimeFrame={changeTimeFrame} />
        <TimeFrameCards isActive={isActive} />
      </div>
    </div>
  );
}
