import { renderHook, waitFor } from "@testing-library/react";
import { IClub } from "../../types/clubs";
import useViewClub from "../useViewClub";
import { ClubsProvider } from "../../context/clubsContext";

jest.mock("../../api/clubs", () => {
  return {
    getClubFromApi: jest.fn((clubId: number) =>
      Promise.resolve({
        id: clubId,
        country: "test",
        name: "test",
        shortName: "test",
        tla: "test",
        crestUrl: "test",
        address: "test",
        phone: "test",
        website: "test",
        email: "test",
        founded: 1,
        clubColors: "test",
        venue: "test",
      }),
    ),
  };
});

describe("useClubs", () => {
  test("it should return an array of Clubs", async () => {
    const clubId = 100;

    const parsedClub: IClub = {
      id: clubId,
      name: "test",
      shortName: "test",
      country: "test",
      tla: "test",
      crestSrc: "test",
      address: "test",
      phone: "test",
      website: "test",
      email: "test",
      founded: 1,
      clubColors: "test",
      venue: "test",
    };

    const { result } = renderHook(() => useViewClub(clubId), {
      wrapper: ClubsProvider,
    });
    await waitFor(() => {
      expect(result.current).toEqual({
        data: parsedClub,
        loading: false,
        error: null,
      });
    });
  });
});
