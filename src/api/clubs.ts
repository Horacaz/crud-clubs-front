import { IUnparsedClubs } from "../types/clubs";

export async function getClubsFromApi(): Promise<IUnparsedClubs> {
  const clubs = await fetch("https://crub-clubs-api.onrender.com/api").then(
    (res) => res.json(),
  );
  return clubs;
}
