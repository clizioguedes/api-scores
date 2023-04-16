import { Request, Response } from "express";
import { DataCountryRepository } from "../infra/db/Countries/data-countries.repository";
import { ListAllLCountriesUseCase } from "../useCases/Countries/find-all-countries.use-case";

export class CountryController {
  async findAll(_request: Request, response: Response) {
    const countriesRepo = new DataCountryRepository();

    const findAllCountries = new ListAllLCountriesUseCase(countriesRepo);

    const output = await findAllCountries.execute();

    return response.status(200).json(output);
  }
}
