import { LeaguePropsRepository } from "./leagues.entity";

export interface LeagueRepositoryInterface {
  findAll(): Promise<LeaguePropsRepository[]>;
  findLeagueByCode(code: string): Promise<LeaguePropsRepository>;
}
