import { COUNTRIES } from "../../../constants/endpoints";
import { CountryPropsRepository } from "../../../domain/Countries/countries.entity";
import { CountryRepositoryInterface } from "../../../domain/Countries/countries.repository";
import instance from "../../../services/api";

export class DataCountryRepository implements CountryRepositoryInterface {
  async findAll(): Promise<CountryPropsRepository[]> {
    const countries: CountryPropsRepository[] = await instance
      .get(COUNTRIES)
      .then((response) => {
        return response.data.areas;
      })
      .catch((err: Error) => {
        console.log("error", err);
        throw new Error("Por favor verifique a requisição da API Sports"); // IMPORTANT! throw unless you intend to suppress the error
      });

    return countries;
  }
}
