export type LeagueProps = {
  leagueId: number;
  name: string;
  slug: string;
  popularName: string;
  currentEdition: {
    editionId: number;
    season: string;
    name: string;
    popularName: string;
    slug: string;
  };
  currentFase: {
    faseId: number;
    name: string;
    slug: string;
    type: string;
    _link: string;
  };
  currentRound?: {
    name?: string;
    slug?: string;
    round?: number;
    status?: string;
  };
  status?: string;
  type?: string;
  logo?: string;
  country: string;
  _link: string;
};

export class League {
  public props: LeagueProps;

  constructor(props: LeagueProps) {
    this.props = {
      ...props,
    };
  }
}
