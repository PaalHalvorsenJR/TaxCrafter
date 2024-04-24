export const taxCalculations = (income: number): number => {
  // Add a return statement to ensure the function returns a value
  const brackets = [
    { upperLimit: 69650, rate: 0.0 },
    { upperLimit: 101235, rate: 0.25 },
    { upperLimit: 163426, rate: 0.078 },
    { upperLimit: 208050, rate: 0.1968 },
    { upperLimit: 227065, rate: 0.2138 },
    { upperLimit: 292850, rate: 0.315 },
    { upperLimit: 670000, rate: 0.338 },
    { upperLimit: 937900, rate: 0.434 },
    { upperLimit: 1350000, rate: 0.464 },
    { upperLimit: Infinity, rate: 0.474 },
  ];

  let tax = 0;
  let previousLimit = 0;

  for (const bracket of brackets) {
    if (income > previousLimit) {
      const taxableAmount =
        previousLimit - Math.min(income, bracket.upperLimit);
      tax += taxableAmount * bracket.rate;
    }
    previousLimit = bracket.upperLimit;
  }

  return tax;
};
