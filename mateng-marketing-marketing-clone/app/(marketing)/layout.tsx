import { Poppins } from "next/font/google";
import { Navbar } from "./_components/navbar";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const font = Poppins({
  subsets: ["latin"],
  weight: ["900", "800", "700", "500", "400", "300", "200", "100", "600"],
});

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn("h-full bg-white", font.className)}>
      <Navbar />
      <main className="bg-white">{children}</main>
      <Toaster />
    </div>
  );
};

export default MarketingLayout;
