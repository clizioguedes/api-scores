import { DataLeagueRepository } from "./data-leagues.repository";

describe("League Repository Test", () => {
  test("should find all leagues", async () => {
    const repository = new DataLeagueRepository();

    const leagues = await repository.findAll();

    expect(leagues).toHaveLength(1);
  });
});
