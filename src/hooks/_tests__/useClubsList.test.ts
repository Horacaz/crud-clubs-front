import { renderHook, waitFor } from "@testing-library/react";
import { IParsedClub } from "../../types/clubs";
import useClubsList from "../useClubsList";
import { ClubsProvider } from "../../context/clubsContext";

jest.mock("../../api/clubs", () => {
  return {
    getClubsFromApi: jest.fn(() =>
      Promise.resolve([
        {
          id: 1,
          area: {
            id: 1,
            name: "test",
          },
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
          lastUpdated: "test",
        },
      ]),
    ),
  };
});

describe("useClubsLists", () => {
  const clubsListDataMock: IParsedClub[] = [
    {
      id: 1,
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
      lastUpdated: "test",
    },
  ];

  test("It should return an array of Clubs", async () => {
    const { result } = renderHook(() => useClubsList(), {
      wrapper: ClubsProvider,
    });
    await waitFor(() =>
      expect(result.current).toEqual({
        data: clubsListDataMock,
        loading: false,
        error: null,
      }),
    );
  });
});