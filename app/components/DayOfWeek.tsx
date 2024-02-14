import React from "react";
import { WEEK } from "../constants";

const DayOfWeek: React.FC = () => {
  return (
    <>
      {WEEK.map((day) => (
        <div
          key={day}
          className="m-0.5 flex items-center justify-center rounded-lg border bg-[#571FAF] px-2 sm:m-2 sm:px-4"
        >
          <p className="text-xs sm:text-base">{day}</p>
        </div>
      ))}
    </>
  );
};

export default DayOfWeek;
