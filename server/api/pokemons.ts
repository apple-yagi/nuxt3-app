import { PokemonsResponse } from "~~/types";

export default async (): Promise<PokemonsResponse> => {
  const apiEndpoint = process.env.POKEMON_ZUKANN_API
  if(!apiEndpoint) throw new Error

  const pokemonsResponse: PokemonsResponse = await (await fetch(apiEndpoint)).json();
  return pokemonsResponse
}