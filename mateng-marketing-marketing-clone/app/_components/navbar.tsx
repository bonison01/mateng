import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const whatsapp = process.env.WHATSAPP_NUMBER;
  return (
    <div className="fixed z-50 top-0 w-full h-14 sm:h-20 px-4 bg-white shadow-sm flex items-center">
      <div className="flex justify-between items-center w-full">
        <div className="hover:cursor-pointer">
          <Link href={"/"}>
            <Image
              src={"/mateng_icon.png"}
              alt="logo"
              height={50}
              width={200}
              className="hidden sm:block"
            />
            <Image
              src={"/mateng_icon.png"}
              alt="logo"
              height={50}
              width={120}
              className="sm:hidden"
            />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button asChild>
            <Link href={`https://wa.me/91${whatsapp}`} target="_blank">Create Order</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
