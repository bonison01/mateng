import { Footer } from "../_components/footer-section";
import { QuickLink } from "../_components/quick-link-section";
import { AboutsMain } from "./_components/abouts-main";
import { SubscribeBottom } from "./_components/subscribe-bottom";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <AboutsMain />
      <QuickLink />
      <SubscribeBottom />
      <Footer currentPage="about-us" />
    </main>
  );
}
