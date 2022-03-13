import create from "zustand";

const purchaseStore = create((set) => ({
  purchasedCoin: null,
  setpurchasedCoin: (newCoin) => {
    set((state) => ({ purchasedCoin: newCoin }));
  },
  resetCoin: () => {
    set((state) => ({ purchasedCoin: null }));
  },
}));

export default purchaseStore;
