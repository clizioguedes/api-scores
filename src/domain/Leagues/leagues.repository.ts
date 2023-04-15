import { League, LeagueProps } from "./leagues.entity";

export interface LeagueRepositoryInterface {
  findAll(): Promise<LeagueProps[]>;
}
