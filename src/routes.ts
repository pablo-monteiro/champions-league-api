import { Router } from "express";
import {
  getAllPlayersController,
  getPlayerByIdController,
  postPlayerController,
} from "./controllers/playersController";

const router = Router();

router.get("/players", getAllPlayersController);
router.get("/players/:id", getPlayerByIdController);
router.post("/players", postPlayerController);

export default router;
