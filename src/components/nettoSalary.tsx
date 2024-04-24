import { taxCalculations } from "./taxCalculations";

export const nettoSalary = (income: number): number => {
  const tax = taxCalculations(income);
  return income + tax;
};
