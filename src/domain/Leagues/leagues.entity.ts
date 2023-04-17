export type LeaguePropsRepository = {
  id: number;
  area: {
    id: number;
    name: string;
    code: string;
    flag?: string | null;
  };
  name: string;
  code: string;
  type: string;
  emblem?: string | null;
  plan: string;
  currentSeason: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner?: null | null;
  };
  numberOfAvailableSeasons: number;
  lastUpdated: string;
};

export class League {
  public props: LeaguePropsRepository;

  constructor(props: LeaguePropsRepository) {
    this.props = {
      ...props,
    };
  }
}
