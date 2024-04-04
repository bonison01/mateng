import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["900", "800", "700", "500", "400", "300", "200", "100", "600"],
});

export function Main() {
  return (
    <div className="text-center flex flex-col justify-center items-center w-full px-2 pt-14 sm:pt-20 sm:px-0">
      <div className="h-4 sm:hidden"/>
      <div className="w-full rounded-lg sm:rounded-none bg-green-800 py-5 sm:py-10">
        <div className="sm:space-y-4 text-white">
          <h1
            className={cn(
              "font-semibold text-4xl sm:text-5xl flex flex-col sm:flex-row justify-center",
              font.className
            )}
          >
            <span >We discover</span><span className="hidden sm:inline-block">,</span><span className="text-yellow-300 sm:ml-2">We drive</span>
          </h1>
          <h4
            className={cn("font-extralight text-lg sm:text-3xl", font.className)}
          >
            fulfilled 10000+ order
          </h4>
        </div>
      </div>

      <div className="w-fit flex flex-col justify-center items-center py-6 sm:py-0">
      {/* <div className="bg-gradient-to-r from-gray-300 from-[1%] via-gray-500 via-[15%]  to-white w-full h-0.5 rounded-lg" /> */}
      <div className="flex flex-col sm:flex-row sm:h-32">
        <div className="p-2 sm:px-2 sm:py-4 flex flex-col items-center justify-center">
          <p
            className={cn(
              "text-gray-400 text-sm font-semibold",
              font.className
            )}
          >
            Customer
          </p>
          <p
            className={cn(
              "text-black font-semibold text-lg",
              font.className
            )}
          >
            10000+ clients
          </p>
        </div>
        <div className="bg-gray-500 h-full w-0.5" />
        <div className="p-2 sm:px-12 sm:py-6 flex flex-col items-center justify-center">
          <p
            className={cn(
              "text-gray-400 text-sm font-semibold",
              font.className
            )}
          >
            Discovered
          </p>
          <p
            className={cn(
              "text-black font-semibold text-lg",
              font.className
            )}
          >
            50+ business
          </p>
        </div>
        <div className="bg-gray-400 h-full w-0.5" />
        <div className="p-2 sm:px-6 sm:py-6 flex flex-col items-center justify-center">
          <p
            className={cn(
              "text-gray-400 text-sm font-semibold",
              font.className
            )}
          >
            Delivered
          </p>
          <p
            className={cn(
              "text-black font-semibold text-lg",
              font.className
            )}
          >
            30000+ parcel
          </p>
        </div>
        <div className="bg-gray-300 h-full w-0.5" />
        <div className="flex flex-col justify-center items-center p-2 sm:py-6 sm:px-12">
          <p
            className={cn(
              "text-gray-400 text-sm font-semibold",
              font.className
            )}
          >
            B2B Partners
          </p>
          <p
            className={cn(
              "text-black font-semibold text-lg",
              font.className
            )}
          >
            50+ Vendors
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-gray-400 from-[1%] via-gray-500 via-[15%]  to-white w-full h-0.5 rounded-lg hidden sm:block" />
      </div>
    </div>
  );
}
