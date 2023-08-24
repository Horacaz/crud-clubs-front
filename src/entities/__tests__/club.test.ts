import { IParsedClub } from "../../types/clubs";
import Club from "../club";

const clubDataMock: IParsedClub = {
  id: 1,
  name: "test",
  shortName: "test",
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
describe("Club", () => {
  test("It should instantiate a new club if valid data is passed", () => {
    const club = new Club(clubDataMock);
    expect(club).toBeInstanceOf(Club);
    expect(club).toEqual(clubDataMock);
  });
});
