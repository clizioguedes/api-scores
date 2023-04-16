import { LeaguePropsRepository } from "./leagues.entity";

export interface LeagueRepositoryInterface {
  findAll(): Promise<LeaguePropsRepository[]>;
}
