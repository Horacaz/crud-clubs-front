import { createContext, useReducer } from "react";
import { State, Action } from "../types/clubs";

const initialState: State<null> = {
  loading: false,
  error: null,
  data: null,
};

const clubsReducer = (
  state: State<null>,
  action: Action<null>,
): State<null> => {
  switch (action.type) {
    case "LOADING":
      return { ...state, ...action.payload };
    case "SUCCESS":
      return { ...state, ...action.payload };
    case "ERROR":
      return { ...state, ...action.payload };
    default:
      throw new Error("Invalid action type");
  }
};

export const ClubsContext = createContext(initialState);
export const ClubsDispatchContext = createContext(
  {} as React.Dispatch<Action<null>>,
);

export function ClubsProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(clubsReducer, initialState);
  return (
    <ClubsContext.Provider value={state}>
      <ClubsDispatchContext.Provider value={dispatch}>
        {children}
      </ClubsDispatchContext.Provider>
    </ClubsContext.Provider>
  );
}
