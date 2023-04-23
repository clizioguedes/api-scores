import { MatchesPropsRepository } from "./matches.entity";

export interface MatchesRepositoryInterface {
  findMatchesByLeagueId(
    code: string,
    params: object
  ): Promise<MatchesPropsRepository>;
}
