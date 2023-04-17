import { countryMock } from "../../mocks/countries";
import { leaguePropsMock } from "../../mocks/leagues";
import { Country } from "./countries.entity";

describe("countries", () => {
  test("constructor", () => {
    const league = new Country(countryMock);

    expect(league.props).toStrictEqual({
      ...countryMock,
    });
  });
});
