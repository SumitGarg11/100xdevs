import { atom } from "recoil";

export const movieAtom = atom({
  key: "movieAtom",
  default: [],
});

export const inputMovieAtom = atom({
  key: "inputMovieAtom",
  default: "",
});
