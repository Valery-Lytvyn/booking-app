import React, { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TimePeriodButton from "./TimePeriodButton";
import { WORKING_HOURS } from "../constants";
import { AiOutlineClose } from "react-icons/ai";
import useReservedPeriods from "../hooks/useReservedPeriods";

interface WorkingHoursProps {
  isWorkingHoursOpen: boolean;
  handleClose: () => void;
  date: string | null;
}

const tileMotion = {
  initial: {
    x: "-100%",
    transition: {
      duration: 0.5,
    },
  },
  animate: {
    x: "0",
    transition: {
      duration: 0.5,
      type: "fade",
    },
  },
};

const WorkingHours: React.FC<WorkingHoursProps> = ({
  isWorkingHoursOpen,
  handleClose,
  date,
}) => {
  const { reservedPeriodIds, setReservedPeriodIds, handleReservedPeriod } =
    useReservedPeriods();

  const timePeriodButtons = useMemo(
    () =>
      WORKING_HOURS.map(({ id, period }) => {
        const isReserved = reservedPeriodIds.includes(id);
        return (
          <TimePeriodButton
            key={id}
            id={id}
            timePeriod={period}
            handleReservedPeriod={handleReservedPeriod}
            isReserved={isReserved}
          />
        );
      }),
    [handleReservedPeriod, reservedPeriodIds],
  );

  return (
    <AnimatePresence>
      {isWorkingHoursOpen && (
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial="initial"
            animate="animate"
            exit="initial"
            variants={tileMotion}
            className="relative flex h-full flex-col rounded-xl border border-primary bg-zinc-800 p-4"
          >
            {date && (
              <p className="font bold py-4 text-center text-2xl ">{date}</p>
            )}
            <div className="flex flex-col items-center">
              {timePeriodButtons}
            </div>
            <button
              aria-label="Close Working Hours"
              className="absolute right-0 top-0 m-2 p-1 "
              onClick={() => {
                handleClose(), setReservedPeriodIds([]);
              }}
            >
              <AiOutlineClose className="text-xl transition duration-500 hover:text-primary" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WorkingHours;
