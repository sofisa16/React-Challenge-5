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

  function testFn(theFn) {
    return theFn(mockPokemonsData, "charizard");
  }

  /* BONUS */
  test("it should validate the 'pokeList' argument", () => {
    const mockFn = jest.fn(filterPokemon);
    testFn(mockFn);
    expect(Array.isArray(mockFn.mock.calls[0][0])).toBe(true);
  });

  test("it should validate the 'name' argument", () => {
    const mockFn = jest.fn(filterPokemon);
    testFn(mockFn);
    expect(typeof mockFn.mock.calls[0][1]).toBe("string");
  });
});
