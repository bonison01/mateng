import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export const Footer = ({ currentPage }: { currentPage?: string }) => {
  const instagram = process.env.INSTAGRAM_PAGE || "#";
  const facebook = process.env.FACEBOOK_PAGE || "#";
  const youtube = process.env.YOUTUBE_CHANNEL || "#";
  const linkedIn = process.env.LINKEDIN_PAGE || "#";

  return (
    <footer className="m-4 mt-8">
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row sm:justify-center text-xs font-semibold text-gray-500">
        <div className="flex justify-center items-center">
          <a
            href="/about-us"
            className="hover:underline me-4 md:me-6 md:ml-2 uppercase"
          >
            About
          </a>
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
        </div>
        <div className="flex justify-center items-center">
          <Link href={facebook}>
            <Facebook className="h-4 w-4 me-4" />
          </Link>
          <Link href={instagram}>
            <Instagram className="h-4 w-4 me-4" />
          </Link>
          <Link href={linkedIn}>
            <Linkedin className="h-4 w-4 me-4" />
          </Link>
          <Link href={youtube}>
            <Youtube className="h-4 w-4" />
          </Link>
        </div>
      </div>
      {currentPage && (
        <div className="max-w-[90vw] w-[350px] sm:w-[500px] text-[0.5rem] text-center leading-[10px]">
          Icon attributions.{" "}
          {(currentPage === "about-us" || currentPage === "discover") && (
            <>
              <a
                href="https://www.flaticon.com/free-icons/instagram-logo"
                title="instagram logo icons"
              >
                Instagram by Freepik.
              </a>{" "}
              <a
                href="https://www.flaticon.com/free-icons/facebook"
                title="facebook icons"
              >
                Facebook by riajulislam.
              </a>{" "}
              <a
                href="https://www.flaticon.com/free-icons/linkedin"
                title="linkedin icons"
              >
                Linkedin by riajulislam.
              </a>{" "}
              <a
                href="https://www.flaticon.com/free-icons/youtube"
                title="youtube icons"
              >
                Youtube by Freepik.
              </a>{" "}
            </>
          )}
          {currentPage === "services" && (
            <>
              {/* this icons are used in our service page */}
              <a
                href="https://www.flaticon.com/free-icons/online-shop"
                title="online shop icons"
              >
                Online shop by Freepik.
              </a>{" "}
              <a
                href="https://www.flaticon.com/free-icons/fast-delivery"
                title="fast delivery icons"
              >
                Fast delivery by Ainul Muttakin.
              </a>{" "}
              <a
                href="https://www.flaticon.com/free-icons/fast-delivery"
                title="fast delivery icons"
              >
                Fast delivery truck by nawicon
              </a>{" "}
            </>
          )}
          All from Flaticon.
        </div>
      )}
    </footer>
  );
};
