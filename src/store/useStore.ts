import { create } from "zustand";
export interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  qty: number;
}

interface BasketState {
  basket: Item[];
  removeItem: (idToRemove: number) => void;
  fetchBasket: () => void;
  changeQty: (idToChange: number, action: string) => void;
}

const useBasketStore = create<BasketState>(function (set) {
  return {
    basket: [],
    removeItem: (idToRemove: number) =>
      set((state: BasketState) => ({
        basket: state.basket.filter(function (item) {
          return item.id !== idToRemove;
        }),
      })),
    fetchBasket: async () => {
      const req = await fetch("http://fakestoreapi.com/products");
      let result = await req.json();
      result = result.map((e: Item) => ({
        ...e,
        description: e.description.substring(0, 50) + "...",
      }));
      result = result.map((e: Item) => ({
        ...e,
        price: e.price * 30,
      }));
      const buckWithQty = result.map((e: Item) => ({ ...e, qty: 1 }));
      set({ basket: buckWithQty });
    },
    changeQty: (idToChange: number, action: string) =>
      set((state: BasketState) => {
        if (action === "add") {
          return {
            basket: state.basket.map((el) => {
              if (el.id == idToChange && el.qty < 10)
                return { ...el, qty: el.qty + 1 };
              else return el;
            }),
          };
        } else {
          return {
            basket: state.basket.map((el) => {
              if (el.id == idToChange && el.qty > 1)
                return { ...el, qty: el.qty - 1 };
              else return el;
            }),
          };
        }
      }),
  };
});

export default useBasketStore;
