import { create } from "zustand";

interface ChoiceDrinksProps {
  drinks: {
    name: string;
    price: number;
    stock: number;
    choice: boolean;
  }[];
  setDownDrinkCount: (name: string) => void;
  setChoiceDrink: (name: string) => void;
  resetChoiceDrink: () => void;
  resetDrinks: () => void;
}

const useChoiceDrinksStore = create<ChoiceDrinksProps>((set) => ({
  drinks: [
    {
      name: "콜라",
      price: 1100,
      stock: 10,
      choice: false,
    },
    {
      name: "물",
      price: 600,
      stock: 10,
      choice: false,
    },
    {
      name: "커피",
      price: 700,
      stock: 0,
      choice: false,
    },
  ],
  setChoiceDrink: (name) =>
    set((state) => ({
      drinks: state.drinks.map((item) =>
        name === item.name
          ? { ...item, choice: true }
          : { ...item, choice: false }
      ),
    })),
  setDownDrinkCount: (name) =>
    set((state) => ({
      drinks: state.drinks.map((item) =>
        name === item.name ? { ...item, stock: item.stock - 1 } : item
      ),
    })),
  resetChoiceDrink: () =>
    set((state) => ({
      drinks: state.drinks.map((item) => ({ ...item, choice: false })),
    })),
  resetDrinks: () =>
    set(() => ({
      drinks: [
        {
          name: "콜라",
          price: 1100,
          stock: 10,
          choice: false,
        },
        {
          name: "물",
          price: 600,
          stock: 10,
          choice: false,
        },
        {
          name: "커피",
          price: 700,
          stock: 0,
          choice: false,
        },
      ],
    })),
}));

export default useChoiceDrinksStore;
