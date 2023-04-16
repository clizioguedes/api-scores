import { LeagueRepositoryInterface } from "../../domain/Leagues/leagues.repository";
import { LeaguePropsRepository } from "../../lib/leagues";

export class ListAllLeaguesUseCase {
  constructor(private leagueRepo: LeagueRepositoryInterface) {}

  async execute(): Promise<LeaguePropsRepository[]> {
    const leagues = await this.leagueRepo.findAll();

    return leagues;
  }
}
