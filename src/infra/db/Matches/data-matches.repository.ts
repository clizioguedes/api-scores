import instance from "../../../services/api";
import { MATCHES_LEAGUE_BY_ID } from "../../../constants/endpoints";
import { MatchesRepositoryInterface } from "../../../domain/Matches/matches.repository";
import { MatchesPropsRepository } from "../../../domain/Matches/matches.entity";

export class DataMatchesRepository implements MatchesRepositoryInterface {
  async findMatchesByLeagueId(
    code: string,
    params: object
  ): Promise<MatchesPropsRepository> {
    const standing: MatchesPropsRepository = await instance
      .get(MATCHES_LEAGUE_BY_ID(code), {
        params,
      })
      .then((response) => response.data)
      .catch((err: Error) => {
        console.log("error", err);
        // throw new Error(
        //   "Por favor verifique a requisição do get das partidas na API do Football Data"
        // ); // IMPORTANT! throw unless you intend to suppress the error
      });

    return standing;
  }
}
