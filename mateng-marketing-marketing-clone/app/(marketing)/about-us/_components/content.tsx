import Image from "next/image";
import { Subscribe } from "./subscribe";

export function Content() {
  return (
    <div className="pt-2 sm:pt-0 px-2 sm:px-0 pb-3 sm:pb-0  sm:w-[80%] flex flex-col items-center space-y-4">
      <div className="bg-green-800 text-white flex flex-col sm:flex-row rounded-lg sm:rounded-none pt-4 sm:pt-0">
        <div className="flex-[2] font-medium text-4xl sm:text-7xl space-y-4 flex flex-row sm:flex-col justify-center p-2 sm:py-8 sm:pl-8">
          <p className="hidden sm:block">What Do</p>
          <p className="hidden sm:block">We Do?</p>
          <p className="sm:hidden">What Do We Do?</p>
        </div>
        <div className="flex-[4] p-2 sm:p-6 flex flex-col items-center">
          <p className="text-center sm:text-left font-extralight sm:font-light text-base sm:text-lg">
            Mateng is your go-to platform for discovering the unknown and
            meeting your product/service needs. Our reliable and free discovery
            platform aims to quickly grow businesses from scratch. With our
            integrated Mateng Delivery Service, we provide SMEs with seamless
            shipping solutions. Experience a swift and efficient way to know
            everything and get what you need, all in one place.
          </p>
          <Subscribe />
        </div>
      </div>
      <img src="/discover-page-img.jpg" alt="mateng at work" />
    </div>
  );
}
