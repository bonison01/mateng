"use client";

import { instantRates } from "@/data/instant-rates";
import { useInstantRates } from "@/hooks/use-instant-rates";
import { cn } from "@/lib/utils";

const getRate = (from?: string, to?: string) => {
  if (from && to) {
    const lowercaseFrom = from.trim().toLowerCase();
    for (const objKey in instantRates) {
      if (objKey.trim().toLowerCase() === lowercaseFrom) {
        for (const key in instantRates[objKey]) {
          const lowercaseTo = to.trim().toLowerCase();
          if (key.trim().toLowerCase() === lowercaseTo) {
            return `${instantRates[objKey][key]}`;
          }
        }
      }
    }
  }

  return undefined;
};

export function Result() {
  const from = useInstantRates((state) => state.from);
  const to = useInstantRates((state) => state.to);

  const rate = getRate(from, to);

  return (
    <div
      className={cn(
        "flex justify-center items-center w-40 sm:w-52 h-10 sm:h-12 rounded-sm font-bold text-xl sm:text-3xl",
        rate ? "bg-blue-400 text-black " : "bg-gray-300 text-gray-500"
      )}
    >
      {rate ? rate : "No Result"}
    </div>
  );
}
