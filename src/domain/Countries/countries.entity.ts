export type CountryPropsRepository = {
  id: number;
  name: string;
  countryCode: string;
  flag: string | null;
  parentAreaId: number;
  parentArea: string;
};

export class Country {
  public props: CountryPropsRepository;

  constructor(props: CountryPropsRepository) {
    this.props = {
      ...props,
    };
  }
}
