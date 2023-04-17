import { DataCountryRepository } from "../../infra/db/Countries/data-countries.repository";
import { ListAllLCountriesUseCase } from "./find-all-countries.use-case";

describe("CreateRouteUseCase Test", () => {
  test("should list all leagues", async () => {
    const repository = new DataCountryRepository();
    const findAllCountriesUseCase = new ListAllLCountriesUseCase(repository);

    const output = await findAllCountriesUseCase.execute();

    expect(output).toHaveLength(272);
  });
});
