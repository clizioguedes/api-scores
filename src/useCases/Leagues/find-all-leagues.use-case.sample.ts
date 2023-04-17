import { DataLeagueRepository } from "../../infra/db/Leagues/data-leagues.repository";

import { ListAllLeaguesUseCase } from "./find-all-leagues.use-case";

describe("CreateRouteUseCase Test", () => {
  test("should list all leagues", async () => {
    const repository = new DataLeagueRepository();
    const findAllLeaguesUseCase = new ListAllLeaguesUseCase(repository);

    const output = await findAllLeaguesUseCase.execute();

    expect(output).toHaveLength(972);
  });
});
