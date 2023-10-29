import { IParsedClub, IUnparsedClub } from "../types/clubs";
import Club from "../entities/club";

export default function clubMapper(club: IUnparsedClub): IParsedClub {
  const imagesRegex = /images\/.*$/;
  const API_URL = "https://crub-clubs-api.onrender.com";
  const crestUrl = club.crestUrl.match(imagesRegex);
  const crestSrc = crestUrl ? `${API_URL}/${crestUrl[0]}` : club.crestUrl;
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
