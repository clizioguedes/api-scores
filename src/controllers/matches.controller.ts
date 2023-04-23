import { Request, Response } from "express";
import { DataMatchesRepository } from "../infra/db/Matches/data-matches.repository";
import { FindMatchesByLeagueIdUseCase } from "../useCases/Matches/find-matches-by-league-id";

export class MatchesController {
  async findMatchesLeagueById(request: Request, response: Response) {
    const { params, query } = request;

    const matchesRepo = new DataMatchesRepository();

    const findStandingById = new FindMatchesByLeagueIdUseCase(matchesRepo);

    const output = await findStandingById.execute(params.code, query);

    return response.status(200).json(output);
  }
}
