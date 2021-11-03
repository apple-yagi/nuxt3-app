import { PokemonsResponse } from "~~/types";

export default async (): Promise<PokemonsResponse> => {
  const apiEndpoint = process.env.POKEMON_ZUKANN_API;
  if (!apiEndpoint) {
    throw new Error("Not found apiEndpoint");
  }

  const res = await fetch(apiEndpoint).catch((err) => {
    throw new Error(err);
  });

  const pokemonsResponse: PokemonsResponse = await res.json().catch((err) => {
    throw new Error(err);
  });

  return pokemonsResponse;
};
