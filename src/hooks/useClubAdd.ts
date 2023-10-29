import { addClubToApi } from "../api/clubs";
import { ApiResponse, IFormData } from "../types/clubs";
import useClubsApp from "./useClubsApp";
export default function useClubAdd() {
  const { state, handleLoadingAction, handleSuccessAction, handleErrorAction } =
    useClubsApp<ApiResponse>();

  const addClub = async (data: IFormData) => {
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
      const apiStatus = await addClubToApi(formData);
      handleSuccessAction(apiStatus);
    } catch (error) {
      handleErrorAction(error as Error);
    }
  };

  return { addClub, state };
}
