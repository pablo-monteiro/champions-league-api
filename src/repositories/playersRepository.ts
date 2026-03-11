import { PlayerModel } from "../models/playersModel";

const database: PlayerModel[] = [
  {
    id: 1,
    name: "Lionel Messi",
    club: "Paris Saint-Germain",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
      Overall: 93,
      Pace: 85,
      Shooting: 94,
      Passing: 91,
      Dribbling: 95,
      Defending: 38,
      Physical: 85,
    },
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    club: "Manchester United",
    nationality: "Portugal",
    position: "Forward",
    statistics: {
      Overall: 92,
      Pace: 88,
      Shooting: 92,
      Passing: 89,
      Dribbling: 92,
      Defending: 36,
      Physical: 86,
    },
  },
  {
    id: 3,
    name: "Luis Suarez",
    club: "Barcelona",
    nationality: "Uruguay",
    position: "Forward",
    statistics: {
      Overall: 91,
      Pace: 86,
      Shooting: 90,
      Passing: 88,
      Dribbling: 91,
      Defending: 37,
      Physical: 84,
    },
  },
  {
    id: 4,
    name: "Neymar",
    club: "Paris Saint-Germain",
    nationality: "Brazil",
    position: "Forward",
    statistics: {
      Overall: 92,
      Pace: 87,
      Shooting: 92,
      Passing: 89,
      Dribbling: 92,
      Defending: 36,
      Physical: 86,
    },
  },
];

export const findAllPlayersRepository = async (): Promise<PlayerModel[]> => {
  return database;
};

export const findPlayerByIdRepository = async (
  id: number,
): Promise<PlayerModel | undefined> => {
  return database.find((player) => player.id === id);
};

export const insertPlayerRepository = async (player: PlayerModel) => {
  database.push(player);
};

export const deletePlayerRepository = async (id: number) => {
  const index = database.findIndex((player) => player.id === id);

  if (index !== -1) {
    database.splice(index, 1);
  }
};
