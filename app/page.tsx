"use client";
import React, { useEffect, useMemo, useState } from "react";
import { daysInMonth, formattedDate } from "./utils";
import WorkingHours from "./components/WorkingHours";
import MonthSelector from "./components/MonthSelector";
import YearSelector from "./components/YearSelector";
import Calendar from "./components/Calendar";

const Home: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [isWorkingHoursOpen, setIsWorkingHoursOpen] = useState(false);

  useEffect(() => {
    const date = new Date();
    setSelectedMonth(date.getMonth() + 1);
    setSelectedYear(date.getFullYear());
  }, []);

  const daysNumber = useMemo(() => {
    if (selectedMonth && selectedYear) {
      const numberOfDays = daysInMonth(selectedMonth, selectedYear);
      return Array(numberOfDays)
        .fill(null)
        .map((_, i) => i + 1);
    }
    return null;
  }, [selectedMonth, selectedYear]);

  const firstMonthDay = useMemo(() => {
    if (selectedMonth && selectedYear) {
      const dayNum = new Date(`${selectedYear}-${selectedMonth}-01`).getDay();
      if (dayNum === 0) {
        return 7;
      } else {
        return dayNum;
      }
    }
    return null;
  }, [selectedMonth, selectedYear]);

  const handleSelectedDay = (date: number) => {
    const selectedDate = formattedDate(date, selectedMonth, selectedYear);
    setSelectedDay(selectedDate);
    setIsWorkingHoursOpen(true);
  };

  const handlerMonthsChanged = (month: number) => {
    const normalizedMonth = (month + 12) % 12 || 12;
    setSelectedMonth(normalizedMonth);
    if (month === 13 && normalizedMonth === 1) {
      setSelectedYear((prev) => (prev ? prev + 1 : null));
    }
    if (month === 0 && normalizedMonth === 12) {
      setSelectedYear((prev) => (prev ? prev - 1 : null));
    }
  };

  const handlerYearsChanged = (selectedYear: number) => {
    return setSelectedYear(selectedYear);
  };

  return (
    <main className="container mx-auto flex h-full w-full items-center p-2 sm:p-10 ">
      <div className="relative z-10 flex flex-col gap-10  rounded-xl  border border-primary bg-zinc-800 p-1 shadow-lg shadow-black sm:p-4">
        <div className="flex justify-between ">
          <div className="flex items-center justify-center gap-2">
            {selectedMonth && (
              <MonthSelector
                selectedMonth={selectedMonth}
                handlerMonthsChanged={handlerMonthsChanged}
              />
            )}
          </div>
          {selectedYear && (
            <YearSelector
              selectedYear={selectedYear}
              handlerYearsChanged={handlerYearsChanged}
            />
          )}
        </div>
        <div className="self-end ">
          {daysNumber && firstMonthDay ? (
            <Calendar
              daysNumber={daysNumber}
              firstMonthDay={firstMonthDay}
              handleSelectedDay={handleSelectedDay}
            />
          ) : null}
        </div>
        <WorkingHours
          isWorkingHoursOpen={isWorkingHoursOpen}
          handleClose={() => setIsWorkingHoursOpen(false)}
          date={selectedDay}
        />
      </div>
    </main>
  );
};

export default Home;
