import { CountryPropsRepository } from "./countries.entity";

export interface CountryRepositoryInterface {
  findAll(): Promise<CountryPropsRepository[]>;
}
