import { LeagueRepositoryInterface } from "../../../domain/Leagues/leagues.repository";

import instance from "../../../services/api";
import { LEAGUES } from "../../../constants/endpoints";
import { LeaguePropsRepository, getLeagues } from "../../../lib/leagues";

export class DataLeagueRepository implements LeagueRepositoryInterface {
  async findAll(): Promise<LeaguePropsRepository[]> {
    const leagues: LeaguePropsRepository[] = await instance
      .get(LEAGUES)
      .then((response) => {
        return response.data.response;
      })
      .catch((err: Error) => {
        console.log("error", err);

        throw new Error("Por favor verifique a requisição da API Sports"); // IMPORTANT! throw unless you intend to suppress the error
      });

    return getLeagues(leagues);
  }
}
