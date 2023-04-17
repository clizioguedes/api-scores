import { Router } from "express";
import { LeagueController } from "../../../controllers/leagues.controller";
import { CountryController } from "../../../controllers/countries.controller";

import cors from "cors";

const options: cors.CorsOptions = {
  methods: "*",
  origin: "*",
};

const router = Router();

router.use(cors(options));

// Countries
const countryController = new CountryController();
router.get("/countries", countryController.findAll);

// Leagues
const leagueController = new LeagueController();
router.get("/leagues", leagueController.findAll);

export default router;
