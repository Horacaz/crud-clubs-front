import { IUnparsedClub, IClub } from "../../types/clubs";
import clubMapper from "../clubMapper";
jest.mock("../../entities/club", () => jest.fn((club: IClub) => club));

const clubDataMock: IUnparsedClub = {
  id: 1,
  name: "test",
  country: "test",
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
};

const expectedMappedClub: IClub = {
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
};

describe("clubMapper", () => {
  test("when a valid club data is passed it should return a parsed club", () => {
    const parsedClub = clubMapper(clubDataMock);
    expect(parsedClub).toEqual(expectedMappedClub);
  });
});
