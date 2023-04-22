import { StandingPropsRepository } from "./standing.entity";

export interface StandingRepositoryInterface {
  findStandingLeagueById(
    code: string,
    params: object
  ): Promise<StandingPropsRepository>;
}
