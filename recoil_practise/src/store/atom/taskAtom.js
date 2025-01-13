import { atom } from "recoil";

export const taskAtom = atom({
  key: "taskAtom", // Unique key for this atom
  default: [], // Default value: an empty array for tasks
});
export const inputAtom = atom({
  key: "inputAtom",
  default: "", // Input field value
});
