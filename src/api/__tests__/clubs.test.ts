import { getClubsFromApi } from "../clubs";
global.fetch = jest.fn(
  () =>
    new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r({});
      });
      resolve({ json: () => jsonPromise } as Response);
    }),
);

beforeEach(() => {
  jest.clearAllMocks();
});

describe("getClubsFromApi", () => {
  test("It correctly sends a request to API", async () => {
    const apiUrl = "https://crub-clubs-api.onrender.com/api";
    getClubsFromApi();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(apiUrl);
  });
});
