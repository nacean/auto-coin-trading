import create from "zustand";

const candleStore = create((set) => ({
  candles: [],
  insertCandle: (newCandle) =>
    set((state) => ({ candles: [...state.candles, ...newCandle] })),
}));

export default candleStore;
