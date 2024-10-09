import { MainInstantRate } from "./_components/instant-delivery-rate";
import { OtherRate } from "./_components/other-delivery-rates";
import styles from "./page.module.css"; // Import the custom CSS

export default function DeliveryRatesPage() {
  return (
    <main className={`${styles.flex} ${styles.mainContainer}`}>
      <MainInstantRate /> 
      <OtherRate />
    </main>
  );
}
