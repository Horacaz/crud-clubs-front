export interface IParsedClub {
  id: number;
  country: string;
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
}

export interface IUnparsedClub {
  id: number;
  area: {
    id: number;
    name: string;
  };
  name: string;
  shortName: string;
  tla: string;
  crestUrl: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  founded: number;
  clubColors: string;
  venue: string;
  lastUpdated: string;
}

export interface ApiResponse {
  status: string;
}
