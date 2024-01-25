"use client";
import { timeFrames } from "@/utils/data";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

interface ProfileCardProps {
  isActive: string;
  changeTimeFrame: (newInterval: string) => void;
}

function ProfileCard({ isActive, changeTimeFrame }: ProfileCardProps) {
  return (
    <React.Fragment>
      <div className="md:row-span-2 md:col-span-1 bg-dark-blue rounded-2xl ">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            duration: 0.5,
          }}
          className="p-4 relative bg-card-blue md:h-[70%] rounded-[0.675rem] md:p-6 "
        >
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              duration: 0.3,
              ease: "easeIn",
              stiffness: 70,
              damping: 5,
            }}
            className="grid place-items-center md:place-items-start grid-cols-4 gap-2 md:gap-2 md:grid-cols-1 md:grid-rows:3 p-3 md:p-0 "
          >
            <Image
              priority
              alt="Profile Picture"
              width={70}
              height={70}
              src="/images/image-jeremy.png"
              className="hidden  md:mt-5 md:block border-2 rounded-full"
            />
            <Image
              priority
              alt="Profile Picture"
              width={60}
              height={60}
              src="/images/image-jeremy.png"
              className="md:hidden col-span-1 border-2 rounded-full"
            />
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                duration: 0.3,
                ease: "easeIn",
                stiffness: 10,
                damping: 5,
              }}
              className="md:col-span-2 col-span-3 md:mt-5"
            >
              <div className="col-span-4 md:mt-4 md:col-span-2 text-pale-blue text-xs">
                Report for
              </div>
              <div className="whitespace-nowrap md:whitespace-normal col-span-4 md:col-span-2 text-md md:text-4xl font-bold md:font-extralight">
                Jeremy Robson
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            duration: 0.3,
            ease: "easeIn",
            stiffness: 70,
            damping: 5,
          }}
          className="md:p-6 grid grid-cols-3 md:grid-cols-1 gap-2 p-4"
        >
          {timeFrames.map((interval) => (
            <motion.span
              key={interval}
              onClick={() => changeTimeFrame(interval)}
              className={`cursor-pointer transition-all hover:text-white hover:font-bold  ${
                isActive === interval
                  ? "text-white font-bold"
                  : "text-desaturated-blue"
              }`}
            >
              {interval}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </React.Fragment>
  );
}

export default ProfileCard;
