export type Seasons = {
  year: number;
  start: string;
  end: string;
  current: boolean;
  coverage: {
    fixtures: {
      events: boolean;
      lineups: boolean;
      statistics_fixtures: boolean;
      statistics_players: boolean;
    };
    standings: boolean;
    players: boolean;
    top_scorers: boolean;
    top_assists: boolean;
    top_cards: boolean;
    injuries: boolean;
    predictions: boolean;
    odds: boolean;
  };
};

export type LeaguePropsRepository = {
  league: {
    id: number;
    name: string;
    type: string;
    logo: string;
  };
  country: {
    name: number;
    code?: string;
    flag?: string;
  };
  seasons: Seasons[];
};

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
