import { ClubModel } from "../models/clubModel";
import fs from "fs/promises";

export const findAllClubsRepository = async (): Promise<ClubModel[]> => {
  const data = await fs.readFile("./src/data/clubs.json", "utf-8");
  const clubs: ClubModel[] = JSON.parse(data);
  return clubs;
};
