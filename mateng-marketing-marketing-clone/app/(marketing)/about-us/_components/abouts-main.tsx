import Link from "next/link";
import { Content } from "./content";

export function AboutsMain() {
  const instagram = process.env.INSTAGRAM_PAGE || "#";
  const facebook = process.env.FACEBOOK_PAGE || "#";
  const youtube = process.env.YOUTUBE_CHANNEL || "#";
  const linkedIn = process.env.LINKEDIN_PAGE || "#";

  return (
    <div className="text-center pt-20 pb-10 sm:pt-32 flex flex-col justify-center items-center space-y-4">
      <Content />
      <div className="font-semibold text-lg sm:text-xl w-[70%] sm:pt-10">
        Learn more about our impactful work at Mateng.
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
