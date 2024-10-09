import { Footer } from "./_components/footer-section";
import { Main } from "./_components/main-section";
import { QuickLink } from "./_components/quick-link-section";
import { Subscribe } from "./_components/subscribe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Main /> 
      <QuickLink />
      <Subscribe />
      <Footer />
    </main>
  );
}
