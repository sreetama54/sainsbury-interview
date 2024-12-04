
import { TOGGLE_SORT } from "./constants";

export function toggleSort(payload) {
  return {
    type: TOGGLE_SORT,
    payload
  };
}