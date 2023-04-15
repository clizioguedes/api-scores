import { LeagueRepositoryInterface } from "../../../domain/Leagues/leagues.repository";

import instance from "../../../services/api";
import { LEAGUES } from "../../../constants/endpoints";
import { LeaguePropsRepository, getLeagues } from "../../../lib/leagues";
import { LeagueProps } from "../../../domain/Leagues/leagues.entity";

export class DataLeagueRepository implements LeagueRepositoryInterface {
  async findAll(): Promise<LeagueProps[]> {
    const leagues: LeaguePropsRepository[] = await instance
      .get(LEAGUES)
      .then((response) => {
        return response.data;
      });

    return getLeagues(leagues);
  }
}
