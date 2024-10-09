import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["900", "800", "700", "500", "400", "300", "200", "100", "600"],
});

export function OtherRate() {
  return (
    <div
      className={cn(
        "py-12 flex flex-col items-center space-y-6 w-72 sm:w-auto",
        font.className
      )}
    >
      <Button className="w-full" asChild>
        <Link
          href={"/instant-delivery-rate-outside.pdf"}
          target="_blank"
          className="font-bold text-lg sm:text-xl"
        >
          Instant Delivery Rates outside Imphal
        </Link>
      </Button>
      <Button className="w-full" asChild>
        <Link
          href={"/standard-delivery-rate.pdf"}
          target="_blank"
          className="font-bold text-lg sm:text-xl"
        >
          Standard Delivery Rates
        </Link>
      </Button>
    </div>
  );
}
