import { createContext, useContext } from "react";

export const AppContext = createContext();
export const initialState = {
  expression: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "clear":
        console.log('foi o clear');
      break;
    case "bksp":
      break;
    case "percent":
      break;
    case "equal":
        console.log('foi o iqual');
      break;
    default:
      return state;
  }
};
