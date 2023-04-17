import { Router } from "express";
import { LeagueController } from "../../../controllers/leagues.controller";
import { CountryController } from "../../../controllers/countries.controller";

import cors from "cors";

const options: cors.CorsOptions = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
    "Access-Control-Allow-Origin",
  ],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: "*",
  preflightContinue: false,
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
