import { cn } from "@/lib/utils";
import Link from "next/link";
import { poppinsFont } from "../../_components/quick-link-section";

export function DiscoverMain() {
  const instagram = process.env.INSTAGRAM_PAGE || "#";
  const facebook = process.env.FACEBOOK_PAGE || "#";
  const youtube = process.env.YOUTUBE_CHANNEL || "#";
  const linkedIn = process.env.LINKEDIN_PAGE || "#";

  return (
    <div
      className={cn(
        "text-center pt-20 pb-10 sm:pt-32 flex flex-col justify-center items-center space-y-4",
        poppinsFont.className
      )}
    >
      <div className="font-medium text-xl sm:text-4xl w-[70%]">
        We are currently building our discovery platform.
      </div>
      <div className="font-medium text-base sm:text-xl w-[70%] sm:pt-10">
        stay with us to get updates
      </div>
      <div className="flex">
        <Link href={facebook}>
          <img
            src={"/facebook.png"}
            alt="facebook"
            className="h-10 w-10 mr-4"
          />
        </Link>
        <Link href={instagram}>
          <img
            src={"/instagram.png"}
            alt="instagram"
            className="h-10 w-10 mr-4"
          />
        </Link>
        <Link href={linkedIn}>
          <img
            src={"/linkedin.png"}
            alt="linkedin"
            className="h-10 w-10 mr-4"
          />
        </Link>
        <Link href={youtube}>
          <img src={"/youtube.png"} alt="youtube" className="h-10 w-10 mr-4" />
        </Link>
      </div>
    </div>
  );
}
