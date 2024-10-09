import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { FromAutocomplete } from "./from-autocomplete";
import { ToAutocomplete } from "./to-autocomplete";
import { Result } from "./result";

const font = Poppins({
  subsets: ["latin"],
  weight: ["900", "800", "700", "500", "400", "300", "200", "100", "600"],
});

export function MainInstantRate() {
  return (
    <div className={cn("w-full  pt-14 sm:pt-20", font.className)}>
      <div className="text-2xl sm:text-4xl font-bold text-center py-8">Instant Delivery Rate</div>
      <div
        className={cn(
          "flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 text-lg sm:text-2xl font-semibold w-full",
          font.className
        )}
      >
        <div className="text-center sm:space-y-2">
          <p>From</p>
          <FromAutocomplete />
        </div>
        <div className="text-center sm:space-y-2">
          <p>To</p>
          <ToAutocomplete />
        </div>
        <div className="text-center sm:space-y-2">
          <p>Rate</p>
          <Result />
        </div>
      </div>
    </div>
  );
}
