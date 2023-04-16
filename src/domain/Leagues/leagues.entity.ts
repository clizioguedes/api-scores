import { LeaguePropsRepository } from "../../lib/leagues";

export class League {
  public props: LeaguePropsRepository;

  constructor(props: LeaguePropsRepository) {
    this.props = {
      ...props,
    };
  }
}
