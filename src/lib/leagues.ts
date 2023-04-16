import { LeaguePropsRepository } from "../domain/Leagues/leagues.entity";

export function getLeagues(
  data: LeaguePropsRepository[]
): LeaguePropsRepository[] {
  return data.map((item: LeaguePropsRepository) => ({
    ...getLeague(item),
  }));
}

export function getLeague(data: LeaguePropsRepository): LeaguePropsRepository {
  return data;
}
