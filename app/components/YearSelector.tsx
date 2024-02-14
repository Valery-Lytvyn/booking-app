import React from "react";
import CounterButtons from "./CounterButtons";

interface YearSelectorProps {
  selectedYear: number;
  handlerYearsChanged: (year: number) => void;
}

const YearSelector: React.FC<YearSelectorProps> = ({
  selectedYear,
  handlerYearsChanged,
}) => {
  return (
    <div className="relative flex h-14 w-32 items-center pr-10">
      <div className="w-fit border-b border-white">
        <p className="text-3xl font-bold">{selectedYear}</p>
      </div>
      <div className="absolute inset-0 flex flex-col items-end justify-center">
        <CounterButtons
          changeHandler={handlerYearsChanged}
          count={selectedYear}
        />
      </div>
    </div>
  );
};

export default YearSelector;
