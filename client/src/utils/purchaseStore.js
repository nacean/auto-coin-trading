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
  doingPurchase: false,
  setpurchasedCoin: (newCoin) => {
    purchaseStore.purchasedCoin = newCoin;
  },
  resetCoin: () => {
    purchaseStore.purchasedCoin = null;
  },
  getPurchasedCoin: () => {
    return purchaseStore.purchasedCoin;
  },
  setdoingPurchase: (doing) => {
    purchaseStore.doingPurchase = doing;
  },
  getdoingPurchase: () => {
    return purchaseStore.doingPurchase;
  },
};

export default purchaseStore;
