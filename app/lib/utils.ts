import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateTotalPrice = (price: number, vat: number): string => {
  const total = price * (1 + vat / 100);
  return total.toFixed(2);
};
