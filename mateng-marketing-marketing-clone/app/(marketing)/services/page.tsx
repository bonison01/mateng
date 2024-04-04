import { Footer } from "../_components/footer-section";
import { QuickLink } from "../_components/quick-link-section";
import { ServicesMain } from "./_components/services-main";

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <ServicesMain />
      <QuickLink currentPage="services" />
      <Footer currentPage="services" />
    </div>
  );
}
