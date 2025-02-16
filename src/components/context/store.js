import { create } from "zustand";

const useStore = create((set) => ({
  shopName : "onlineDukaan",
  count: 0,
  totalCartItems : 0 ,
  total : 0,
  cartItems : [],
  increase: () => set((state) => ({ count: state.count + 1 })),
  // addToCart : (value) => set((state) => ({ products : value })),
  changeCart: (value) => set(() => ({ cartItems: [...value] })),
  addToCart : (value) => set((state) => ({cartItems : [...state.cartItems,value]}) )
}));

export default useStore