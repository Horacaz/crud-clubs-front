import { useEffect, useState } from "react";
import { deleteClubFromApi } from "../api/clubs";
import { ApiResponse } from "../types/clubs";
import useClubsApp from "./useClubsApp";

export default function useClubDelete() {
  const [clubToDelete, setClubToDelete] = useState(0);
  const { state, handleLoadingAction, handleSuccessAction, handleErrorAction } =
    useClubsApp<ApiResponse>();
  useEffect(() => {
    const deleteClub = async () => {
      handleLoadingAction();
      try {
        const apiStatus = await deleteClubFromApi(clubToDelete);
        handleSuccessAction(apiStatus);
      } catch (error) {
        handleErrorAction(error as Error);
      }
    };
    if (clubToDelete !== 0) {
      deleteClub();
    }
  }, [
    clubToDelete,
    handleLoadingAction,
    handleSuccessAction,
    handleErrorAction,
  ]);
  return { setClubToDelete, clubToDelete, state };
}
