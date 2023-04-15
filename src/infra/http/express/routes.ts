import { Router } from "express";
import { LeagueController } from "../../../controllers/leagues.controller";

const router = Router();

const leagueController = new LeagueController();

router.get("/leagues", leagueController.findAll);

export default router;
