import { GlobalFooter } from "../_components/GlobalFooter";
import { QuickLink } from "../_components/quick-link-section";
import { PrivacyMain } from "./_components/privacy-main";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <PrivacyMain />
      <QuickLink />
      <GlobalFooter />
    </div>
  );
}
