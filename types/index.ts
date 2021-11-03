export type Pokemon = {
  no: string;
  sub: number;
  name: string;
  sub_name: string;
  omosa: string;
  takasa: string;
  type_1: number;
  type_2: number;
  kyodai_flg: number;
  image_m: string;
  image_s: string;
  zukan_no: string;
};

export type PokemonsResponse = {
  results: Pokemon[];
  paging: {
    page: number;
    count: number;
    perPage: number;
    prevPage: number;
    nextPage: number;
    pageCount: number;
  };
};
