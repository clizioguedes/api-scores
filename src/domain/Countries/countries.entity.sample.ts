import { leaguePropsMock } from "../../mocks/leagues";
import { League } from "./leagues.entity";

describe("Leagues", () => {
  test("constructor", () => {
    const leagueMock = { ...leaguePropsMock };

    const league = new League(leagueMock);

    expect(league.props).toStrictEqual({
      ...leagueMock,
    });
  });
});
