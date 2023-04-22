import instance from "../../../services/api";
import { STANDING_LEAGUE_BY_ID } from "../../../constants/endpoints";
import { StandingPropsRepository } from "../../../domain/Standing/standing.entity";
import { StandingRepositoryInterface } from "../../../domain/Standing/standing.repository";

export class DataStandingRepository implements StandingRepositoryInterface {
  async findStandingLeagueById(
    code: string,
    params: object
  ): Promise<StandingPropsRepository> {
    const standing: StandingPropsRepository = await instance
      .get(STANDING_LEAGUE_BY_ID(code), {
        params,
      })
      .then((response) => response.data)
      .catch((err: Error) => {
        console.log("error", err);

        throw new Error(
          "Por favor verifique a requisição do get de liga pelo code na API do Football Data"
        ); // IMPORTANT! throw unless you intend to suppress the error
      });

    return standing;
  }
}
