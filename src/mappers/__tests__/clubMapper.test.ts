import { IUnparsedClub, IParsedClub } from "../../types/clubs";
import clubMapper from "../clubMapper";
jest.mock("../../entities/club", () => jest.fn((club: IParsedClub) => club));

const clubDataMock: IUnparsedClub = {
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
};

const expectedMappedClub: IParsedClub = {
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
};

describe("clubMapper", () => {
  test("when a valid club data is passed it should return a parsed club", () => {
    const parsedClub = clubMapper(clubDataMock);
    expect(parsedClub).toEqual(expectedMappedClub);
  });
});
