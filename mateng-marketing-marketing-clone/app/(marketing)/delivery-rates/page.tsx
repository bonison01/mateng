
import { MainInstantRate } from "./_components/instant-delivery-rate";
import { OtherRate } from "./_components/other-delivery-rates";

export default function DeliveryRatesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <MainInstantRate />
      <OtherRate />

    </main>
  );
}
