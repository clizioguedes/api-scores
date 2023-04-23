import { Request, Response } from "express";
import { DataLeagueRepository } from "../infra/db/Leagues/data-leagues.repository";
import { ListAllLeaguesUseCase } from "../useCases/Leagues/find-all-leagues.use-case";
import { FindLeagueByCodeUseCase } from "../useCases/Leagues/find-league-by-code.use-case";

export class LeagueController {
  async findAll(_request: Request, response: Response) {
    const leaguesRepo = new DataLeagueRepository();

    const findAllLeagues = new ListAllLeaguesUseCase(leaguesRepo);

    const output = await findAllLeagues.execute();

    return response.status(200).json(output);
  }

  async findLeagueByCode(request: Request, response: Response) {
    const { code } = request.params;

    const leagueRepo = new DataLeagueRepository();

    const findLeagueByCode = new FindLeagueByCodeUseCase(leagueRepo);

    const output = await findLeagueByCode.execute(code);

    return response.status(200).json(output);
  }
}
