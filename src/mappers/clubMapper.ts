import { IClub, IUnparsedClub } from "../types/clubs";
import Club from "../entities/club";

export default function clubMapper(club: IUnparsedClub): IClub {
  const regex = /public\\images\\*.*/;
  const crestUrlMatch = club.crestUrl.match(regex);
  if (crestUrlMatch) {
    const parsedUrl =
      crestUrlMatch[0].replace(
        "public",
        "https://crub-clubs-api.onrender.com/api",
      ) || club.crestUrl;
    club.crestUrl = parsedUrl;
  }

  const crestSrc = club.crestUrl;
  const country = club.country;
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
    country,
  });
}
