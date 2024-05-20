import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { Product } from "../../types";
import { fetchCartItemsSelector } from "../selector/selector";

const { persistAtom } = recoilPersist();

export const cartItemsAtom = atom<Product[]>({
  key: "cartItemsAtom",
  default: fetchCartItemsSelector,
});

export const cartItemCheckedIdsAtom = atom<number[]>({
  key: "cartItemCheckedIdsAtom",
  default: [],
  effects: [persistAtom],
});
