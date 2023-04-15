import { LeagueProps } from "../../domain/Leagues/leagues.entity";
import { LeagueRepositoryInterface } from "../../domain/Leagues/leagues.repository";

export class ListAllLeaguesUseCase {
  constructor(private leagueRepo: LeagueRepositoryInterface) {}

  async execute(): Promise<LeagueProps[]> {
    const leagues = await this.leagueRepo.findAll();

    return leagues;
  }
}
