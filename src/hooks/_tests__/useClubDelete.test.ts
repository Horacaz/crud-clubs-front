import { renderHook, waitFor, act } from "@testing-library/react";
import { ApiResponse } from "../../types/clubs";
import useClubDelete from "../useClubDelete";
import { ClubsProvider } from "../../context/clubsContext";

jest.mock("../../api/clubs", () => {
  return {
    deleteClubFromApi: jest.fn(() =>
      Promise.resolve({
        status: "Okey",
      }),
    ),
  };
});

const apiResponse: ApiResponse = { status: "Okey" };

describe("useClubDelete", () => {
  test("it should succesfully call deleteClubFromApi", async () => {
    const { result } = renderHook(() => useClubDelete(), {
      wrapper: ClubsProvider,
    });
    const { setClubToDelete } = result.current;

    act(() => {
      setClubToDelete(1);
    });
    await waitFor(() => {
      expect(result.current.state).toEqual({
        data: apiResponse,
        loading: false,
        error: null,
      });
    });
  });
});
