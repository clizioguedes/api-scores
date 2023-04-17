import { LeagueRepositoryInterface } from "../../../domain/Leagues/leagues.repository";

import instance from "../../../services/api";
import { LEAGUES } from "../../../constants/endpoints";
import { getLeagues } from "../../../lib/leagues";
import { LeaguePropsRepository } from "../../../domain/Leagues/leagues.entity";

export class DataLeagueRepository implements LeagueRepositoryInterface {
  async findAll(): Promise<LeaguePropsRepository[]> {
    const leagues: LeaguePropsRepository[] = await instance
      .get(LEAGUES)
      .then((response) => {
        return response.data.competitions;
      })
      .catch((err: Error) => {
        console.log("error", err);

        throw new Error("Por favor verifique a requisição da API Sports"); // IMPORTANT! throw unless you intend to suppress the error
      });

    return leagues;
  }
}
