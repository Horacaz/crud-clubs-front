import { IParsedClub, IUnparsedClub } from "../types/clubs";
import Club from "../entities/club";

export default function clubMapper(club: IUnparsedClub): IParsedClub {
  const crestSrc = club.crestUrl;
  const country = club.area.name;
  const {
    id,
    name,
    shortName,
    tla,
    address,
    phone,
    website,
    email,
    founded,
    clubColors,
    venue,
    lastUpdated,
  } = club;

  return new Club({
    id,
    name,
    shortName,
    tla,
    crestSrc,
    address,
    phone,
    website,
    email,
    founded,
    clubColors,
    venue,
    lastUpdated,
    country,
  });
}
