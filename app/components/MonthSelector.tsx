import React from "react";
import { MONTHS } from "../constants";
import CounterButtons from "./CounterButtons";

interface MonthSelectorProps {
  selectedMonth: number;
  handlerMonthsChanged: (month: number) => void;
}

const MonthSelector: React.FC<MonthSelectorProps> = ({
  selectedMonth,
  handlerMonthsChanged,
}) => {
  return (
    <div className="relative flex h-14 w-48 items-center pr-10">
      <div className="ml-12 w-fit border-b border-white">
        <p className="text-center text-2xl font-semibold">
          {MONTHS[selectedMonth - 1]}
        </p>
      </div>
      <div className="absolute inset-0 flex flex-col items-start justify-center">
        <CounterButtons
          changeHandler={handlerMonthsChanged}
          count={selectedMonth}
        />
      </div>
    </div>
  );
};

export default MonthSelector;
