import { createContext } from "react";

const initialState = {
  first: "Jack",
  last: "Lin",
};
export type UserState = typeof initialState;
const context = createContext<typeof initialState>(initialState);

export default context;
