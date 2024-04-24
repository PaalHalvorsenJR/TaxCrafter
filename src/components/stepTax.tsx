export const stepTax = (income: number): number => {
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

  const applicableBracket = brackets.find(
    (bracket) => income <= bracket.upperLimit
  );
  if (applicableBracket) {
    return applicableBracket.rate * 100; // Beregn trinnskatten direkte
  } else {
    return 0;
  }
};
