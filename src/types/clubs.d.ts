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

export interface IFormData {
  clubName: string;
  shortName: string;
  tla: string;
  country: string;
  clubColors: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  founded: number;
  venue: string;
  lastUpdated: string;
  crest?: File;
}

export type State<T> = {
  loading: boolean;
  data: T | null;
  error: null | Error;
};

export type Action<T> =
  | HANDLE_LOADING_ACTION
  | HANDLE_SUCCESS_ACTION<T>
  | HANDLE_ERROR_ACTION;

type HANDLE_LOADING_ACTION = {
  type: "LOADING";
  payload: {
    loading: boolean;
    data: null;
    error: null;
  };
};

type HANDLE_SUCCESS_ACTION<T> = {
  type: "SUCCESS";
  payload: {
    loading: boolean;
    data: T;
    error: null;
  };
};

type HANDLE_ERROR_ACTION = {
  type: "ERROR";
  payload: {
    loading: boolean;
    data: null;
    error: Error;
  };
};
