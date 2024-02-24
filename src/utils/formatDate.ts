import MONTHS from "@/constants/months";

type TPattern = "dd.MM.yyyy";

const formatDate = (
  year: number,
  month: string | number,
  day: number,
  pattern: TPattern = "dd.MM.yyyy",
): string => {
  const monthNumber =
    typeof month === "string" ? MONTHS.findIndex((monthName) => monthName === month) + 1 : month;

  const formattedYear = String(year);
  const formattedMonth = String(monthNumber).padStart(2, "0");
  const formattedDay = String(day).padStart(2, "0");

  const result = pattern
    .replace("dd", formattedDay)
    .replace("MM", formattedMonth)
    .replace("yyyy", formattedYear);
  return result;
};

export default formatDate;
