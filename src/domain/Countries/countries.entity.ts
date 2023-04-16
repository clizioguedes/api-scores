export type CountryPropsRepository = {
  name: string;
  code: string;
  flag: string;
};

export class Country {
  public props: CountryPropsRepository;

  constructor(props: CountryPropsRepository) {
    this.props = {
      ...props,
    };
  }
}
