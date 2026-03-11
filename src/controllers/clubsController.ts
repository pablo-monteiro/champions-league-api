import { Request, Response } from "express";
import { getClubsService } from "../services/clubsService";

export const getClubsController = async (req: Request, res: Response) => {
  const response = await getClubsService();

  return res.status(response.statusCode).json(response.body);
};
