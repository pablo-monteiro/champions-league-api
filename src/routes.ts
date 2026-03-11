import { Router } from "express";
import {
  getAllPlayersController,
  getPlayerByIdController,
  postPlayerController,
  deletePlayerController,
  updatePlayerController,
} from "./controllers/playersController";

const router = Router();

router.get("/players", getAllPlayersController);
router.delete("/players/:id", deletePlayerController);
router.get("/players/:id", getPlayerByIdController);
router.post("/players", postPlayerController);
router.patch("/players/:id", updatePlayerController);

export default router;
