import { renderHook, waitFor, act } from "@testing-library/react";
import useClubAdd from "../useClubAdd";
import { ClubsProvider } from "../../context/clubsContext";
import { IFormData } from "../../types/clubs";
jest.mock("../../api/clubs", () => {
  return {
    addClubToApi: jest.fn(() =>
      Promise.resolve({
        status: "Okey",
      }),
    ),
  };
});

describe("useClubAdd", () => {
  const formData: IFormData = {
    name: "test",
    shortName: "test",
    tla: "test",
    country: "test",
    clubColors: "test",
    address: "test",
    phone: "test",
    website: "test",
    email: "test",
    founded: 0,
    venue: "test",
  };
  test("It should succesfully send a clubFormData", async () => {
    const { result } = renderHook(() => useClubAdd(), {
      wrapper: ClubsProvider,
    });
    const { addClub } = result.current;
    act(() => {
      addClub(formData);
    });
    await waitFor(() => {
      expect(result.current.state).toEqual({
        data: { status: "Okey" },
        loading: false,
        error: null,
      });
    });
  });
});
