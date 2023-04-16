import { Router } from "express";
import { LeagueController } from "../../../controllers/leagues.controller";
import { CountryController } from "../../../controllers/countries.controller";

const router = Router();

// Countries
const countryController = new CountryController();
router.get("/countries", countryController.findAll);

// Leagues
const leagueController = new LeagueController();
router.get("/leagues", leagueController.findAll);

export default router;
