import MONTHS from "@/constants/months";

const getDaysByMonthYear = (selectedMonth: string, selectedYear: number): number[] => {
  const monthIndex = MONTHS.findIndex((month) => month === selectedMonth);
  const countOfDays = new Date(selectedYear, monthIndex + 1, 0).getDate();
  const dayNumbers = [];
  for (let day = 1; day <= countOfDays; day += 1) {
    dayNumbers.push(day);
  }
  return dayNumbers;
};

export default getDaysByMonthYear;
