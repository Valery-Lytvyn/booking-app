import React from "react";
import DayOfWeek from "./DayOfWeek";
import DateGrid from "./DateGrid";

interface CalendarProps {
  daysNumber: number[];
  firstMonthDay: number;
  handleSelectedDay: (date: number) => void;
}

const Calendar: React.FC<CalendarProps> = ({
  daysNumber,
  firstMonthDay,
  handleSelectedDay,
}) => {
  return (
    <>
      <div className="grid grid-cols-7 gap-1 border-b border-primary pb-2 sm:gap-2">
        <DayOfWeek />
      </div>
      <div className=" grid grid-cols-7 gap-1 pt-2  sm:gap-2">
        <DateGrid
          dates={daysNumber}
          firstMonthDay={firstMonthDay}
          handleSelectedDay={handleSelectedDay}
        />
      </div>
    </>
  );
};

export default Calendar;
