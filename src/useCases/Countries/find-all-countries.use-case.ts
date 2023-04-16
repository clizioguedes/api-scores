import { CountryPropsRepository } from "../../domain/Countries/countries.entity";
import { CountryRepositoryInterface } from "../../domain/Countries/countries.repository";

export class ListAllLCountriesUseCase {
  constructor(private leagueRepo: CountryRepositoryInterface) {}

  async execute(): Promise<CountryPropsRepository[]> {
    const leagues = await this.leagueRepo.findAll();

    return leagues;
  }
}
