import { LeaguePropsRepository } from "../../lib/leagues";
import { League } from "./leagues.entity";

export interface LeagueRepositoryInterface {
  findAll(): Promise<LeaguePropsRepository[]>;
}
