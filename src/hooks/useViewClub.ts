import { getClubFromApi } from "../api/clubs";
import clubMapper from "../mappers/clubMapper";
import { useEffect, useReducer } from "react";
import { IParsedClub, IUnparsedClub } from "../types/clubs";

type State = {
  loading: boolean | null;
  error: Error | null;
  data: IParsedClub | null;
};

type Action = {
  type: string;
  payload: IParsedClub | null | Error;
};

const initialState = { loading: null, data: null, error: null };
const clubReducer = (state: State, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOADING":
      return { ...state, loading: true, data: null, error: null };
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        data: payload as IParsedClub,
        error: null,
      };
    case "ERROR":
      return { ...state, loading: false, data: null, error: payload as Error };
    default:
      return state;
  }
};

export default function useViewClub(clubId: number) {
  const [state, dispatch] = useReducer(clubReducer, initialState);
  useEffect(() => {
    const getClub = async () => {
      dispatch({ type: "LOADING", payload: null });
      try {
        const club: IUnparsedClub = await getClubFromApi(clubId);
        const parsedClub = clubMapper(club);
        dispatch({ type: "SUCCESS", payload: parsedClub });
      } catch (error) {
        dispatch({ type: "ERROR", payload: null });
      }
    };
    getClub();
  }, [clubId]);
  return state;
}
