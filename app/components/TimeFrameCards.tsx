"use client";
import activities from "@/utils/data";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface TimeFrameCardProps {
  isActive: string;
}
function TimeFrameCards({ isActive }: TimeFrameCardProps) {
  const classMap: { [key: string]: string } = {
    Work: "bg-orange bg-work hover:cursor-pointer ",
    Play: "bg-soft-blue bg-play",
    Study: "bg-light-red bg-study",
    Exercise: "bg-lime-green bg-exercise",
    Social: "bg-violet bg-social",
    "Self Care": "bg-soft-orange bg-self-care",
  };

  return (
    <>
      {activities.map((item, index) => (
        <div
          className={`${
            classMap[item.title]
          } relative pt-10 md:relative bg-no-repeat bg-right-top rounded-2xl`}
          key={index}
        >
          <motion.div
            // initial={{ opacity: 0, scale: 0 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{
            //   type: "spring",
            //   duration: 0.5,
            // }}
            className="h-auto bottom-0 hover:bg-slate-900 hover:cursor-pointer  transition-colors p-6 md:absolute w-full bg-dark-blue rounded-t-2xl rounded-b-lg md:bottom-0 md:h-[80%]"
          >
            <div className="grid grid-cols-4 grid-rows-2 md:grid-cols-2 md:grid-rows-3 gap-3">
              <motion.span
                // initial={{ y: -100, opacity: 0 }}
                // animate={{ y: 0, opacity: 1 }}
                // transition={{
                //   type: "spring",
                //   duration: 0.3,
                //   ease: "easeIn",
                //   stiffness: 70,
                //   damping: 5,
                // }}
                className="whitespace-nowrap flex justify-start items-center col-span-1 row-span-1 "
              >
                {item.title}
              </motion.span>

              <span className="col-span-3 row-span-1 md:col-span-1 md:row-span-1 flex justify-end items-center">
                <Image
                  src="/images/icon-ellipsis.svg"
                  alt="Ellipsis"
                  width={20}
                  height={20}
                  className="w-auto h-auto"
                />
              </span>

              <motion.span
                // initial={{ y: -100, opacity: 0 }}
                // animate={{ y: 0, opacity: 1 }}
                // transition={{
                //   type: "spring",
                //   duration: 0.3,
                //   ease: "easeIn",
                //   stiffness: 70,
                //   damping: 5,
                // }}
                className="col-span-1 whitespace-nowrap row-span-1 text-xl md:col-span-2 flex justify-start items-center md:row-span-2 md:text-6xl font-extralight"
              >
                {" "}
                {isActive === "Weekly"
                  ? `${item.timeframes.weekly.current}`
                  : isActive === "Monthly"
                  ? `${item.timeframes.monthly.current}  `
                  : `${item.timeframes.daily.current}`}
                hrs
              </motion.span>
              <motion.span
                // initial={{ y: 100, opacity: 0 }}
                // animate={{ y: 0, opacity: 1 }}
                // transition={{
                //   type: "spring",
                //   duration: 0.3,
                //   ease: "easeIn",
                //   stiffness: 10,
                //   damping: 5,
                // }}
                className="text-[0.875rem] col-span-3 flex justify-end items-start whitespace-nowrap md:justify-start row-span-2 text-pale-blue md:col-span-2 md:row-span-2"
              >
                {isActive === "Weekly"
                  ? `Last-Week - ${item.timeframes.weekly.previous}`
                  : isActive === "Monthly"
                  ? `Last-Month - ${item.timeframes.monthly.previous}  `
                  : `Yesterday - ${item.timeframes.daily.previous}`}{" "}
                hrs
              </motion.span>
            </div>
          </motion.div>
        </div>
      ))}
    </>
  );
}

export default TimeFrameCards;
