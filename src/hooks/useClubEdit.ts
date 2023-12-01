import { editClubInApi } from "../api/clubs";
import { ApiResponse, IFormData } from "../types/clubs";
import useClubsApp from "./useClubsApp";
export default function useClubEdit() {
  const { state, handleLoadingAction, handleSuccessAction, handleErrorAction } =
    useClubsApp<ApiResponse>();

  const editClub = async (id: number, data: IFormData) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value instanceof FileList) {
        formData.append(key, value[0]);
      } else {
        formData.append(key, value);
      }
    });
    handleLoadingAction();
    try {
      const apiStatus = await editClubInApi(id, formData);
      handleSuccessAction(apiStatus);
    } catch (error) {
      handleErrorAction(error as Error);
    }
  };

  return { editClub, state };
}
