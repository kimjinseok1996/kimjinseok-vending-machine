import { create } from "zustand";

interface PaymentProps {
  paymentType: "cash" | "card";
  currentCash: number;
  isCardInserted: boolean | string;
  setPaymentType: (value: "cash" | "card") => void;
  setCurrentCash: (value: number) => void;
  resetCurrentCash: () => void;
  setIsCardInserted: (value: boolean | string) => void;
  resetCardInserted: () => void;
}

const usePaymentStore = create<PaymentProps>((set) => ({
  paymentType: "cash",
  currentCash: 0,
  isCardInserted: false,
  setPaymentType: (value) => set(() => ({ paymentType: value })),
  setCurrentCash: (value) =>
    set((state) => ({ currentCash: state.currentCash + value })),
  resetCurrentCash: () => set(() => ({ currentCash: 0 })),
  setIsCardInserted: (value) => set(() => ({ isCardInserted: value })),
  resetCardInserted: () => set(() => ({ isCardInserted: false })),
}));

export default usePaymentStore;
