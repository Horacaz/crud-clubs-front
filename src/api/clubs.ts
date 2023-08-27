import { IUnparsedClub } from "../types/clubs";

export async function getClubsFromApi(): Promise<IUnparsedClub[]> {
  const clubs = await fetch("https://crub-clubs-api.onrender.com/api")
    .then((res) => res.json())
    .then((data) => data.data);
  return clubs;
}

export async function getClubFromApi(id: number): Promise<IUnparsedClub> {
  const club = await fetch(`https://crub-clubs-api.onrender.com/api/club/${id}`)
    .then((res) => res.json())
    .then((data) => data.data);
  return club;
}
