import { Request, Response } from "express";
import { DataLeagueRepository } from "../infra/db/Leagues/data-leagues.repository";
import { ListAllLeaguesUseCase } from "../useCases/Leagues/find-all-leagues.use-case";

export class LeagueController {
  async findAll(_request: Request, response: Response) {
    const leaguesRepo = new DataLeagueRepository();

    const findAllLeagues = new ListAllLeaguesUseCase(leaguesRepo);

    const output = await findAllLeagues.execute();

    return response.status(200).json(output);
  }
}
