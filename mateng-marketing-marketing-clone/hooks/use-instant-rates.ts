import { instantRates } from "@/data/instant-rates";
import { create } from "zustand";

type InstantRateStore = {
  from?: string;
  to?: string;
  setFrom: (from?: string) => void;
  setTo: (to?: string) => void;
};

export const useInstantRates = create<InstantRateStore>((set) => ({
  from: undefined,
  to: undefined,
  setFrom: (from) => set({ from }),
  setTo: (to) => set({ to }),
}));
