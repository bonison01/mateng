import { Footer } from "../_components/footer-section";
import { QuickLink } from "../_components/quick-link-section";
import { DiscoverMain } from "./_components/discover-main";

export default function DiscoverPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <DiscoverMain />
      <QuickLink currentPage="discover" />
      <Footer currentPage="discover" />
    </main>
  );
}
