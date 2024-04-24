export const insuredTax = (income: number): number => {
  if (income > 70000) {
    return income * -0.082;
  } else {
    return 0;
  }
};
