import { Request, Response } from "express";
import { FindStandingLeagueByIdUseCase } from "../useCases/Leagues/find-standing-league-by-id";
import { DataStandingRepository } from "../infra/db/Leagues/data-standing.repository";

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

  // async matchesLeagueById(request: Request, response: Response) {
  //   const { id } = request.params;

  //   const leagueRepo = new DataLeagueRepository();

  //   const findStandingById = new FindLeagueByCodeUseCase(leagueRepo);

  //   const output = await findLeagueByCode.execute(id);

  //   return response.status(200).json(output);
  // }
}
