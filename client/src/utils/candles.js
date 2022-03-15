import create from "zustand";

const candleStore = create((set) => ({
  topCandle: null,
  downCandles: [],
  initTopCandle: (newTopCandle) => {
    set((state) => ({ topCandle: newTopCandle }));
  },
  insertCandle: (newCandle) => {
    set((state) => ({ candles: [...state.candles, ...newCandle] }));
  },
  resetCandle: () => {
    set((state) => ({ candles: [] }));
  },
}));

export default candleStore;
