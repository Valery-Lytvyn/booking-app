import { useCallback, useState } from "react";

const useReservedPeriods = () => {
  const [reservedPeriodIds, setReservedPeriodIds] = useState<number[]>([]);

  const handleReservedPeriod = useCallback((id: number) => {
    setReservedPeriodIds((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id],
    );
  }, []);

  return {
    reservedPeriodIds,
    handleReservedPeriod,
    setReservedPeriodIds,
  };
};

export default useReservedPeriods;
