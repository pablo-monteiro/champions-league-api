import { Router } from "express";
import {
  getAllPlayersController,
  getPlayerByIdController,
  postPlayerController,
  deletePlayerController,
} from "./controllers/playersController";

const router = Router();

router.get("/players", getAllPlayersController);
router.delete("/players/:id", deletePlayerController);
router.get("/players/:id", getPlayerByIdController);
router.post("/players", postPlayerController);

export default router;
