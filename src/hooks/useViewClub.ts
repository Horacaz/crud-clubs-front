import { getClubFromApi } from "../api/clubs";
import clubMapper from "../mappers/clubMapper";
import { useEffect } from "react";
import { IClub, IUnparsedClub } from "../types/clubs";
import useClubsApp from "./useClubsApp";

export default function useViewClub(clubId: number) {
  const { state, handleLoadingAction, handleSuccessAction, handleErrorAction } =
    useClubsApp<IClub>();

  useEffect(() => {
    const getClub = async () => {
      handleLoadingAction();
      try {
        const club: IUnparsedClub = await getClubFromApi(clubId);
        const parsedClub = clubMapper(club);
        handleSuccessAction(parsedClub);
      } catch (error) {
        handleErrorAction(error as Error);
      }
    };
    1;
    getClub();
  }, [clubId, handleLoadingAction, handleSuccessAction, handleErrorAction]);
  return state;
}
