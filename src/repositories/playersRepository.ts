import { PlayerModel } from "../models/playersModel";
import { StatisticsModel } from "../models/statisticsModel";

const database: PlayerModel[] = [
  {
    id: 1,
    name: "Lionel Messi",
    club: "Paris Saint-Germain",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
      overall: 93,
      pace: 85,
      shooting: 94,
      passing: 91,
      dribbling: 95,
      defending: 38,
      physical: 85,
    },
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    club: "Manchester United",
    nationality: "Portugal",
    position: "Forward",
    statistics: {
      overall: 92,
      pace: 88,
      shooting: 92,
      passing: 89,
      dribbling: 92,
      defending: 36,
      physical: 86,
    },
  },
  {
    id: 3,
    name: "Luis Suarez",
    club: "Barcelona",
    nationality: "Uruguay",
    position: "Forward",
    statistics: {
      overall: 91,
      pace: 86,
      shooting: 90,
      passing: 88,
      dribbling: 91,
      defending: 37,
      physical: 84,
    },
  },
  {
    id: 4,
    name: "Neymar",
    club: "Paris Saint-Germain",
    nationality: "Brazil",
    position: "Forward",
    statistics: {
      overall: 92,
      pace: 87,
      shooting: 92,
      passing: 89,
      dribbling: 92,
      defending: 36,
      physical: 86,
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
    return true;
  }

  return false;
};

export const findAndModifyPlayerRepository = async (
  id: number,
  statistics: StatisticsModel,
): Promise<PlayerModel> => {
  const playerIndex = database.findIndex((player) => player.id === id);

  if (playerIndex !== -1) {
    database[playerIndex].statistics = statistics;
  }

  return database[playerIndex];
};
