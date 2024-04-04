import { cn } from "@/lib/utils";
import { poppinsFont } from "../../_components/quick-link-section";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function ServicesMain() {
  return (
    <div
      className={cn(
        "pt-20 pb-10 sm:pt-32 flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-x-12 px-4 sm:px-0",
        poppinsFont.className
      )}
    >
      <div className="flex flex-col items-start font-light text-sm sm:text-base space-y-2">
        <h1 className="text-[#025200] font-extrabold text-2xl sm:text-4xl pb-4">
          Our Services
        </h1>
        <div className="space-y-2 sm:space-y-6">
          <div className="flex items-center">
            <img
              src="/online-shop.png"
              alt="online shop"
              className="h-8 sm:h-10 w-8 sm:w-10 mr-1 sm:mr-2"
            />
            <div className="font-bold">
              <h3 className="text-base sm:text-lg">Business Discovery</h3>
              <p className="text-[0.5rem] sm:text-xs leading-none sm:leading-4">
                (discovering every business house)
              </p>
            </div>
          </div>
          <Separator className="bg-black" />
          <div className="flex items-center">
            <img
              src="/fast-delivery.png"
              alt="instant delivery bike"
              className="h-8 sm:h-10 w-8 sm:w-10 mr-1 sm:mr-2"
            />
            <div className="font-bold">
              <h3 className="text-base sm:text-lg">Instant Delivery Service</h3>
              <p className="text-[0.5rem] sm:text-xs leading-none sm:leading-4">
                (in Manipur)
              </p>
            </div>
          </div>
          <Separator className="bg-black" />
          <div className="flex items-center">
            <img
              src="/fast-delivery-truck.png"
              alt="fast delivery truck"
              className="h-8 sm:h-10 w-8 sm:w-10 mr-1 sm:mr-2"
            />
            <div className="font-bold">
              <h3 className="text-base sm:text-lg">
                Commercial logistics service
              </h3>
              <p className="text-[0.5rem] sm:text-xs leading-none sm:leading-4">
                (including outside states of Manipur)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:w-48">
        <Button className="w-full text-wrap h-12 sm:text-base sm:h-16 rounded-none">
          click here to connect with us
        </Button>
      </div>
    </div>
  );
}
