import { atom } from "recoil";

export const seasonState = atom({
  key: "seasonState",
  default: "spring", // 기본값 (벚꽃)
});
