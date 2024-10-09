"use client";

import { instantRates } from "./instant-rates";
import { useInstantRates } from "@/hooks/use-instant-rates";
import { cn } from "@/lib/utils";

// Define the shape of the state in useInstantRates
interface InstantRatesState {
  from?: string;  // Allow undefined
  to?: string;    // Allow undefined
}

interface ResultProps {
  className?: string;
}

// Helper function to get the rate from `from` and `to`
const getRate = (from?: string, to?: string): string | undefined => {
  if (from && to) {
    const lowercaseFrom = from.trim().toLowerCase();
    const lowercaseTo = to.trim().toLowerCase();

    if (instantRates[lowercaseFrom]) {
      const rate = instantRates[lowercaseFrom][lowercaseTo];
      if (rate) {
        return `${rate}`;
      }
    }
  }
  return undefined;
};

// Result component
export function Result({ className }: ResultProps) {
  const from = useInstantRates((state: InstantRatesState) => state.from); // Allow undefined
  const to = useInstantRates((state: InstantRatesState) => state.to);     // Allow undefined

  const rate = getRate(from, to);

  return (
    <div
      className={cn(
        "flex justify-center items-center w-40 sm:w-52 h-10 sm:h-12 rounded-sm font-bold text-xl sm:text-3xl",
        rate ? "bg-blue-400 text-black" : "bg-gray-300 text-gray-500",
        className
      )}
    >
      {rate ? rate : "No Result"}
    </div>
  );
}
