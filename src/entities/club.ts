import { IParsedClub } from "../types/clubs";
export default class Club implements IParsedClub {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crestSrc: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  founded: number;
  clubColors: string;
  venue: string;
  lastUpdated: string;

  constructor(club: IParsedClub) {
    this.id = club.id;
    this.name = club.name;
    this.shortName = club.shortName;
    this.tla = club.tla;
    this.crestSrc = club.crestSrc;
    this.address = club.address;
    this.phone = club.phone;
    this.website = club.website;
    this.email = club.email;
    this.founded = club.founded;
    this.clubColors = club.clubColors;
    this.venue = club.venue;
    this.lastUpdated = club.lastUpdated;
  }
}
