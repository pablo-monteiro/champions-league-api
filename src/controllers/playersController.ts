import { Request, Response } from "express";
import {
  getAllPlayersService,
  getPlayerByIdService,
  postPlayerService,
} from "../services/playersService";

export const getAllPlayersController = async (req: Request, res: Response) => {
  const httpResponse = await getAllPlayersService();
  return res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerByIdController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const httpResponse = await getPlayerByIdService(id);
  return res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayerController = async (req: Request, res: Response) => {
  const body = req.body;
  const httpResponse = await postPlayerService(body);

  return res.status(httpResponse.statusCode).json(httpResponse.body);
};
