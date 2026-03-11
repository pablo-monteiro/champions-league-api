import { Router } from "express";
import {
  getAllPlayersController,
  getPlayerByIdController,
  postPlayerController,
  deletePlayerController,
  updatePlayerController,
} from "./controllers/playersController";
import { getClubsController } from "./controllers/clubsController";

const router = Router();

router.get("/players", getAllPlayersController);
router.delete("/players/:id", deletePlayerController);
router.get("/players/:id", getPlayerByIdController);
router.post("/players", postPlayerController);
router.patch("/players/:id", updatePlayerController);

router.get("/clubs", getClubsController);

export default router;
