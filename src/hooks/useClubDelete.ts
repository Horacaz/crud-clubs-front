import { useEffect, useReducer, useState } from "react";
import { deleteClubFromApi } from "../api/clubs";
import { ApiResponse } from "../types/clubs";

type State = {
  loading: boolean | null;
  error: Error | null;
  data: ApiResponse | null;
};

type Action = {
  type: string;
  payload: ApiResponse | null | Error;
};

const initialState = { loading: null, data: null, error: null };

const clubsReducer = (state: State, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOADING":
      return { ...state, loading: true, data: null, error: null };
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        data: payload as ApiResponse,
        error: null,
      };
    case "ERROR":
      return { ...state, loading: false, data: null, error: payload as Error };
    default:
      return state;
  }
};

export default function useClubDelete() {
  const [clubToDelete, setClubToDelete] = useState(0);

  const [state, dispatch] = useReducer(clubsReducer, initialState);
  useEffect(() => {
    const deleteClub = async () => {
      dispatch({ type: "LOADING", payload: null });
      try {
        const apiStatus: ApiResponse = await deleteClubFromApi(clubToDelete);
        dispatch({ type: "SUCCESS", payload: apiStatus });
      } catch (error) {
        dispatch({ type: "ERROR", payload: null });
      }
    };

    if (clubToDelete !== 0) {
      deleteClub();
    }
  }, [clubToDelete]);
  return { setClubToDelete, state };
}
