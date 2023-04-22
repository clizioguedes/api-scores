import { StandingPropsRepository } from "../../domain/Standing/standing.entity";
import { DataStandingRepository } from "../../infra/db/Leagues/data-standing.repository";

export class FindStandingLeagueByIdUseCase {
  constructor(private standingRepo: DataStandingRepository) {}

  async execute(
    code: string,
    params: object
  ): Promise<StandingPropsRepository> {
    const standing = await this.standingRepo.findStandingLeagueById(
      code,
      params
    );

    return standing;
  }
}
