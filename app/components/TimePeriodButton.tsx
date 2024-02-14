import React, { memo, useCallback, useMemo, useState } from "react";

interface TimePeriodButtonProps {
  id: number;
  timePeriod: string;
  handleReservedPeriod: (id: number) => void;
  isReserved: boolean;
}

const TimePeriodButton: React.FC<TimePeriodButtonProps> = ({
  id,
  timePeriod,
  handleReservedPeriod,
  isReserved,
}) => {
  const memoizedIsReserved = useMemo(() => isReserved, [isReserved]);

  return (
    <div className="flex  justify-center ">
      <button
        aria-label="Working Hours"
        key={timePeriod}
        onClick={() => handleReservedPeriod(id)}
        className={`  relative z-10 m-1.5 flex w-fit min-w-60 items-center justify-center  rounded-lg border bg-zinc-800 px-4
        py-2
        ${memoizedIsReserved ? "border-red-800" : "border-green-600"}
        `}
      >
        <p>{timePeriod}</p>
      </button>
    </div>
  );
};

export default memo(TimePeriodButton);
