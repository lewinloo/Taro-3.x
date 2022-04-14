import { createContext, useContext } from "react";
import counter from "./counter";

const store = createContext({ counter });

export const useStore = () => {
  return useContext(store);
};
