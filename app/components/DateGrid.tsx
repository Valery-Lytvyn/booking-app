import React, { memo, useMemo } from "react";

interface DateGridProps {
  dates: number[];
  firstMonthDay: number;
  handleSelectedDay: (arg: number) => void;
}

const today = new Date().getDate().toLocaleString();

const DateGrid: React.FC<DateGridProps> = ({
  dates,
  firstMonthDay,
  handleSelectedDay,
}) => {
  const emptyDays = useMemo(
    () => Array(firstMonthDay - 1).fill(0),
    [firstMonthDay],
  );

  return (
    <>
      <React.Fragment>
        {emptyDays.map((_, index) => (
          <div key={index}></div>
        ))}
      </React.Fragment>
      {dates.map((date, index) => (
        <button
          aria-label="Date"
          key={date}
          disabled={
            (6 * index + (6 - firstMonthDay)) % 7 === 0 ||
            (6 * index + (7 - firstMonthDay)) % 7 === 0
          }
          className={`m-0.5 flex items-center justify-center rounded-lg  disabled:opacity-30 sm:m-2 sm:aspect-square sm:p-4
                    ${date === +today ? "border border-green-600" : null}
          `}
          onClick={() => {
            handleSelectedDay(date);
          }}
        >
          <p>{date}</p>
        </button>
      ))}
    </>
  );
};
export default memo(DateGrid);
