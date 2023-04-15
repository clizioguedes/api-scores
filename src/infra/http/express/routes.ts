import { Router } from "express";
import { RouteController } from "../../../controllers/route.controller";
import { LeagueController } from "../../../controllers/leagues.controller";

const router = Router();

const routeController = new RouteController();

const leagueController = new LeagueController();

router.post("/routes", routeController.create);

router.get("/routes", routeController.findAll);

router.get("/leagues", leagueController.findAll);

export default router;
