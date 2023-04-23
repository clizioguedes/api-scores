import { MatchesPropsRepository } from "../../domain/Matches/matches.entity";

import { DataMatchesRepository } from "../../infra/db/Matches/data-matches.repository";

export class FindMatchesByLeagueIdUseCase {
  constructor(private matchRepo: DataMatchesRepository) {}

  async execute(code: string, params: object): Promise<MatchesPropsRepository> {
    const matches = await this.matchRepo.findMatchesByLeagueId(code, params);

    return matches;
  }
}
