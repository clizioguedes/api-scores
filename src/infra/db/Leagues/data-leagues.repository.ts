import { LeagueRepositoryInterface } from "../../../domain/Leagues/leagues.repository";

import instance from "../../../services/api";
import {
  LEAGUES,
  LEAGUE_BY_CODE,
  STANDING_LEAGUE_BY_ID,
} from "../../../constants/endpoints";
import { LeaguePropsRepository } from "../../../domain/Leagues/leagues.entity";
import { StandingPropsRepository } from "../../../domain/Standing/standing.entity";

export class DataLeagueRepository implements LeagueRepositoryInterface {
  async findAll(): Promise<LeaguePropsRepository[]> {
    const leagues: LeaguePropsRepository[] = await instance
      .get(LEAGUES)
      .then((response) => {
        return response.data.competitions;
      })
      .catch((err: Error) => {
        console.log("error", err);
        throw new Error(
          "Por favor verifique a requisição de listagem das ligas na API do Football Data"
        ); // IMPORTANT! throw unless you intend to suppress the error
      });

    return leagues;
  }

  async findLeagueByCode(code: string): Promise<LeaguePropsRepository> {
    const league: LeaguePropsRepository = await instance
      .get(LEAGUE_BY_CODE(code))
      .then((response) => response.data)
      .catch((err: Error) => {
        console.log("error", err);

        throw new Error(
          "Por favor verifique a requisição do get de liga pelo code na API do Football Data"
        ); // IMPORTANT! throw unless you intend to suppress the error
      });
    return league;
  }

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
