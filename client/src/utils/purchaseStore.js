import create from "zustand";

/*const purchaseStore = create((set) => ({
  purchasedCoin: null,
  setpurchasedCoin: (newCoin) => {
    set((state) => ({ purchasedCoin: newCoin }));
  },
  resetCoin: () => {
    set((state) => ({ purchasedCoin: null }));
  },
}));*/

const purchaseStore = {
  purchasedCoin: null,
  setpurchasedCoin: (newCoin) => {
    purchaseStore.purchasedCoin = newCoin;
  },
  resetCoin: () => {
    purchaseStore.purchasedCoin = null;
  },
  getPurchasedCoin: () => {
    return purchaseStore.purchasedCoin;
  },
};

export default purchaseStore;
