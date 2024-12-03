import { useReducer } from "react";

export function useToggle(init: boolean = false) {
  return useReducer(f, init);
}

function f(a: boolean): boolean {
  return !a;
}
