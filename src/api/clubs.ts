import clubs from "../../fixtures/clubs.json";
export async function getClubs() {
  return clubs;
}
export async function getClubsFromApi() {
  const clubs = await fetch("https://crub-clubs-api.onrender.com/api", {
    method: "GET",
  }).then((res) => res.json());
  return clubs;
}
