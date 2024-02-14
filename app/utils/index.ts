export const daysInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate();
};
export const formattedDate = (
  day: number,
  month: number | null,
  year: number | null,
): string => {
  return new Date(`${year}, ${month},${day}`).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};
