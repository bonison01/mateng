import { FromAutocomplete } from "./_components/from-autocomplete";
import { ToAutocomplete } from "./_components/to-autocomplete";
import { MainInstantRate } from "./_components/instant-delivery-rate";
import { OtherRate } from "./_components/other-delivery-rates";
import './styles/globals.css'; // Import global styles

export default function DeliveryRatesPage() {
  return (
    <div className="container">
      <h1>Delivery Rates</h1>
      <FromAutocomplete />
      <ToAutocomplete />
      <MainInstantRate />
      <OtherRate />
    </div>
  );
}
