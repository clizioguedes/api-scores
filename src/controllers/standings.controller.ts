import { Request, Response } from "express";

import { DataStandingRepository } from "../infra/db/Standings/data-standing.repository";
import { FindStandingLeagueByIdUseCase } from "../useCases/Standings/find-standing-league-by-id";

export class StandingsController {
  async findStandingLeagueById(request: Request, response: Response) {
    const { params, query } = request;

    const standingRepo = new DataStandingRepository();

    const findStandingLeagueById = new FindStandingLeagueByIdUseCase(
      standingRepo
    );

    const output = await findStandingLeagueById.execute(params.code, query);

    return response.status(200).json(output);
  }
}
