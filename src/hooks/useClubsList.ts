import { useEffect } from "react";
import { getClubsFromApi } from "../api/clubs";
import { IParsedClub, IUnparsedClub } from "../types/clubs";
import clubMapper from "../mappers/clubMapper";
import useClubsApp from "./useClubsApp";

export default function useClubsList() {
  const { state, handleLoadingAction, handleSuccessAction, handleErrorAction } =
    useClubsApp<IParsedClub[]>();

  useEffect(() => {
    const getClubs = async () => {
      handleLoadingAction();
      try {
        const clubs: IUnparsedClub[] = await getClubsFromApi();
        const parsedClubs = clubs.map((club) => clubMapper(club));
        handleSuccessAction(parsedClubs);
      } catch (error) {
        handleErrorAction(error as Error);
      }
    };

    getClubs();
  }, [handleLoadingAction, handleSuccessAction, handleErrorAction]);

  return state;
}
