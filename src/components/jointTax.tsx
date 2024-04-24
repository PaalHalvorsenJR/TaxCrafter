export const jointTax = (income: number): number => {
  if (income > 70000) {
    return income * -0.15;
  } else {
    return 0;
  }
};
