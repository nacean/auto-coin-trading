import create from "zustand";

/*const candleStore = create((set) => ({
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
}));*/

const candleStore = {
  topCandle: null,
  downCandles: [],
  initTopCandle: function (newTopCandle) {
    candleStore.topCandle = newTopCandle;
  },
  insertCandle: function (newCandle) {
    candleStore.downCandles = [...candleStore.downCandles, newCandle];
  },
  resetCandle: function () {
    candleStore.downCandles = [];
  },
  getTopCandle: function () {
    return candleStore.topCandle;
  },
  getDownCandles: function () {
    return candleStore.downCandles;
  },
};

export default candleStore;
