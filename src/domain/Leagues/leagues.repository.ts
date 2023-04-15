import { LeaguePropsRepository } from "../../lib/leagues";
import { League, LeagueProps } from "./leagues.entity";

export interface LeagueRepositoryInterface {
  findAll(): Promise<LeagueProps[]>;
}
