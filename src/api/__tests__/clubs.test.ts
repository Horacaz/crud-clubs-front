import { getClubsFromApi, getClubFromApi, deleteClubFromApi } from "../clubs";
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

describe("getClubFromApi", () => {
  test("It correctly sends a request to API with provided id", async () => {
    const apiUrl = "https://crub-clubs-api.onrender.com/api/club/1";
    getClubFromApi(1);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(apiUrl);
  });
});

describe("deleteClubFromApi", () => {
  test("It correctly sends a delete request to API with provided id", async () => {
    const apiUrl = "https://crub-clubs-api.onrender.com/api/club/1";
    deleteClubFromApi(1);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(apiUrl, { method: "DELETE" });
  });
});
