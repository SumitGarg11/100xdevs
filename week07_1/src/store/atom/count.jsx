import { atom } from "recoil";

export const countAtom = atom({
  key: "countAtom", // unique ID (with respect to other atoms)
  default: 0, // sumit
});
