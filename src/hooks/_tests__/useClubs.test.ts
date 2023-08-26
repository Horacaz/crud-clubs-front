import { renderHook, waitFor } from "@testing-library/react";
import { IParsedClub } from "../../types/clubs";
import useClubs from "../useClubs";

jest.mock("../../api/clubs", () => {
  return {
    getClubsFromApi: jest.fn(() =>
      Promise.resolve({
        status: "success",
        data: [
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
        ],
      }),
    ),
  };
});

const parsedClub: IParsedClub[] = [
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

describe("useClubs", () => {
  test("it should return an array of Clubs", async () => {
    const { result } = renderHook(() => useClubs());
    await waitFor(() => {
      expect(result.current).toEqual({
        data: parsedClub,
        loading: false,
        error: null,
      });
    });
  });
});
