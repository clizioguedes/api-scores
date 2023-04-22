import { Router } from "express";
import { LeagueController } from "../../../controllers/leagues.controller";
import { CountryController } from "../../../controllers/countries.controller";

import cors from "cors";
import { StandingsController } from "../../../controllers/standings.controller";

const options: cors.CorsOptions = {
  methods: "*",
  origin: "*",
};

const router = Router();

router.use(cors(options));

const countryController = new CountryController();
const leagueController = new LeagueController();
const stardingController = new StandingsController();

// Countries
router.get("/countries", countryController.findAll);

// Leagues
router.get("/leagues", leagueController.findAll);
router.get("/leagues/:code", leagueController.findLeagueByCode);

// Standings
router.get(
  "/leagues/:code/standing",
  stardingController.findStandingLeagueById
);

export default router;
