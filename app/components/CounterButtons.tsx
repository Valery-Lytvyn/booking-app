import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";

interface CounterButtonsProps {
  changeHandler: (arg: number) => void;
  count: number;
}
const buttonStyle = "flex-1  px-2 py-1 hover:bg-black/10 hover:text-primary";

const CounterButtons: React.FC<CounterButtonsProps> = ({
  count,
  changeHandler,
}) => {
  return (
    <div className="gap-.5 flex flex-col overflow-hidden rounded-lg border border-primary">
      <button aria-label="Count up button" className={buttonStyle}>
        <TiArrowSortedUp onClick={() => changeHandler(count + 1)} />
      </button>
      <button className={buttonStyle} aria-label="Count down button">
        <TiArrowSortedDown onClick={() => changeHandler(count - 1)} />
      </button>
    </div>
  );
};

export default CounterButtons;
