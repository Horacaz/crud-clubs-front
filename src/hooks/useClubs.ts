import { useEffect, useReducer } from "react";
import { getClubsFromApi } from "../api/clubs";
import { IUnparsedClubs, IParsedClub } from "../types/clubs";
import clubMapper from "../mappers/clubMapper";

type State = {
  loading: boolean | null;
  error: Error | null;
  data: IParsedClub[] | null;
};

type Action = {
  type: string;
  payload: IParsedClub[] | null | Error;
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
        data: payload as IParsedClub[],
        error: null,
      };
    case "ERROR":
      return { ...state, loading: false, data: null, error: payload as Error };
    default:
      return state;
  }
};

export default function useClubs() {
  const [state, dispatch] = useReducer(clubsReducer, initialState);
  useEffect(() => {
    const getClubs = async () => {
      dispatch({ type: "LOADING", payload: null });
      try {
        const clubs: IUnparsedClubs = await getClubsFromApi();
        const parsedClubs = clubs.data.map((club) => clubMapper(club));
        dispatch({ type: "SUCCESS", payload: parsedClubs });
      } catch (error) {
        dispatch({ type: "ERROR", payload: null });
      }
    };
    getClubs();
  }, []);
  return state;
}
