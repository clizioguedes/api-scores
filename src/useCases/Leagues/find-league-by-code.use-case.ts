import { LeaguePropsRepository } from "../../domain/Leagues/leagues.entity";
import { LeagueRepositoryInterface } from "../../domain/Leagues/leagues.repository";

export class FindLeagueByCodeUseCase {
  constructor(private leagueRepo: LeagueRepositoryInterface) {}

  async execute(code: string): Promise<LeaguePropsRepository> {
    const league = await this.leagueRepo.findLeagueByCode(code);

    return league;
  }
}
