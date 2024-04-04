import { Footer } from "../_components/footer-section";
import { QuickLink } from "../_components/quick-link-section";
import { Content } from "./_components/content";

export default function Subscribers() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Content />
      <QuickLink />
      <Footer />
    </main>
  );
}
