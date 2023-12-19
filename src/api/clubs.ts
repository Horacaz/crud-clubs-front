import { IUnparsedClub, ApiResponse } from "../types/clubs";

const baseUrl = "https://crub-clubs-api.onrender.com/api";
export async function getClubsFromApi(): Promise<IUnparsedClub[]> {
  const clubs = await fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => data.data);
  return clubs;
}

export async function getClubFromApi(id: number): Promise<IUnparsedClub> {
  const club = await fetch(`${baseUrl}/club/${id}`)
    .then((res) => res.json())
    .then((data) => data.data);
  return club;
}

export async function deleteClubFromApi(id: number): Promise<ApiResponse> {
  const club = await fetch(`${baseUrl}/club/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => data);
  return club;
}

export async function addClubToApi(data: FormData): Promise<ApiResponse> {
  const club = await fetch(`${baseUrl}/club`, {
    method: "POST",
    body: data,
  })
    .then((res) => res.json())
    .then((data) => data);
  return club;
}

export async function editClubInApi(
  clubId: number,
  data: FormData,
): Promise<ApiResponse> {
  const club = await fetch(`${baseUrl}/${clubId}`, {
    method: "PATCH",
    body: data,
  })
    .then((res) => res.json())
    .then((data) => data);
  return club;
}
