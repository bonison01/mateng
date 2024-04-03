import { Footer } from "../_components/footer-section";
import { QuickLink } from "../_components/quick-link-section";
import { DirectoryMain } from "./_components/services-main";

export default function DirectoryPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <DirectoryMain />
      <QuickLink currentPage="directory" />
      <Footer currentPage="directory" />
    </div>
  );
}