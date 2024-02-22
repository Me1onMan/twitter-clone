const getYears = (): number[] => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = currentYear; year >= 1900; year -= 1) {
    years.push(year);
  }
  return years;
};

export default getYears;
