import filterPokemon from "./filterPokemon";
import { mockPokemonsData, charizard } from "../mock/pokeData";

describe("Filter Pokemon", () => {
  test("it should return an array when name=''", () => {
    const theory = Array.isArray([]);
    const practice = filterPokemon(mockPokemonsData, "");
    expect(theory).toBe(Array.isArray(practice));
  });

  test("it should return an array when name!=''", () => {
    const theory = Array.isArray([]);
    const practice = filterPokemon(mockPokemonsData, "charizard");
    expect(theory).toBe(Array.isArray(practice));
  });

  test("it should return an empty array", () => {
    const theory = [];
    const practice = filterPokemon(mockPokemonsData, "");
    expect(theory).toStrictEqual(practice);
  });

  test("it should return an array with charizard object", () => {
    const theory = [charizard];
    const practice = filterPokemon(mockPokemonsData, "charizard");
    expect(theory).toStrictEqual(practice);
  });

  /* BUNUS */
  test("it should validate the 'pokeList' argument", () => {});

  test("it should validate the 'name' argument", () => {});
});
