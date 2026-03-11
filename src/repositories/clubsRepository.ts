import { ClubModel } from "../models/clubModel";

const database: ClubModel[] = [
  { id: 1, name: "Real Madrid" },
  { id: 2, name: "Barcelona" },
  { id: 3, name: "Manchester United" },
  { id: 4, name: "Liverpool" },
  { id: 5, name: "Bayern Munich" },
];

export const findAllClubsRepository = async (): Promise<ClubModel[]> => {
  return database;
};
