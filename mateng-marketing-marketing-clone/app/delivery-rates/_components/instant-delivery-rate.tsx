import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { FromAutocomplete } from "./from-autocomplete";
import { ToAutocomplete } from "./to-autocomplete";
import { Result } from "./result";
import styles from "./instant-delivery-rate.module.css"; // Import the custom CSS

const font = Poppins({
  subsets: ["latin"],
  weight: ["900", "800", "700", "500", "400", "300", "200", "100", "600"],
});

export function MainInstantRate() {
  return (
    <div className={cn(styles.instantRateContainer, font.className)}>
      <div className={styles.instantRateHeader}>Instant Delivery Rate</div>
      <div className={cn(styles.instantRateForm, font.className)}>
        <div>
          <p>From</p>
          <FromAutocomplete className={styles.instantRateInput} />
        </div>
        <div>
          <p>To</p>
          <ToAutocomplete className={styles.instantRateInput} />
        </div>
        <div>
          <p>Rate</p>
          <Result className={styles.instantRateInput} />
        </div>
      </div>
    </div>
  );
}
