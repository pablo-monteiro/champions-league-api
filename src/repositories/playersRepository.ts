import { PlayerModel } from "../models/playersModel";
import { StatisticsModel } from "../models/statisticsModel";

const database: PlayerModel[] = [
  {
    id: 1,
    name: "Lionel Messi",
    club: "Inter Miami",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
      overall: 91,
      pace: 82,
      shooting: 90,
      passing: 92,
      dribbling: 94,
      defending: 35,
      physical: 78,
    },
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    club: "Al Nassr",
    nationality: "Portugal",
    position: "Forward",
    statistics: {
      overall: 90,
      pace: 84,
      shooting: 92,
      passing: 81,
      dribbling: 86,
      defending: 34,
      physical: 82,
    },
  },
  {
    id: 3,
    name: "Luis Suarez",
    club: "Inter Miami",
    nationality: "Uruguay",
    position: "Forward",
    statistics: {
      overall: 85,
      pace: 70,
      shooting: 88,
      passing: 80,
      dribbling: 84,
      defending: 38,
      physical: 79,
    },
  },
  {
    id: 4,
    name: "Neymar",
    club: "Al Hilal",
    nationality: "Brazil",
    position: "Forward",
    statistics: {
      overall: 89,
      pace: 86,
      shooting: 87,
      passing: 88,
      dribbling: 92,
      defending: 35,
      physical: 74,
    },
  },

  {
    id: 5,
    name: "Vinicius Junior",
    club: "Real Madrid",
    nationality: "Brazil",
    position: "Forward",
    statistics: {
      overall: 90,
      pace: 95,
      shooting: 85,
      passing: 80,
      dribbling: 92,
      defending: 30,
      physical: 70,
    },
  },
  {
    id: 6,
    name: "Jude Bellingham",
    club: "Real Madrid",
    nationality: "England",
    position: "Midfielder",
    statistics: {
      overall: 90,
      pace: 80,
      shooting: 86,
      passing: 86,
      dribbling: 88,
      defending: 78,
      physical: 85,
    },
  },

  {
    id: 7,
    name: "Robert Lewandowski",
    club: "Barcelona",
    nationality: "Poland",
    position: "Forward",
    statistics: {
      overall: 90,
      pace: 75,
      shooting: 92,
      passing: 79,
      dribbling: 86,
      defending: 40,
      physical: 84,
    },
  },
  {
    id: 8,
    name: "Pedri",
    club: "Barcelona",
    nationality: "Spain",
    position: "Midfielder",
    statistics: {
      overall: 87,
      pace: 79,
      shooting: 76,
      passing: 88,
      dribbling: 90,
      defending: 60,
      physical: 65,
    },
  },

  {
    id: 9,
    name: "Bruno Fernandes",
    club: "Manchester United",
    nationality: "Portugal",
    position: "Midfielder",
    statistics: {
      overall: 88,
      pace: 72,
      shooting: 86,
      passing: 89,
      dribbling: 84,
      defending: 65,
      physical: 74,
    },
  },

  {
    id: 10,
    name: "Mohamed Salah",
    club: "Liverpool",
    nationality: "Egypt",
    position: "Forward",
    statistics: {
      overall: 90,
      pace: 92,
      shooting: 89,
      passing: 82,
      dribbling: 90,
      defending: 45,
      physical: 75,
    },
  },
  {
    id: 11,
    name: "Virgil van Dijk",
    club: "Liverpool",
    nationality: "Netherlands",
    position: "Defender",
    statistics: {
      overall: 89,
      pace: 78,
      shooting: 60,
      passing: 75,
      dribbling: 72,
      defending: 91,
      physical: 90,
    },
  },

  {
    id: 12,
    name: "Harry Kane",
    club: "Bayern Munich",
    nationality: "England",
    position: "Forward",
    statistics: {
      overall: 91,
      pace: 72,
      shooting: 93,
      passing: 84,
      dribbling: 83,
      defending: 45,
      physical: 83,
    },
  },
  {
    id: 13,
    name: "Jamal Musiala",
    club: "Bayern Munich",
    nationality: "Germany",
    position: "Midfielder",
    statistics: {
      overall: 88,
      pace: 86,
      shooting: 82,
      passing: 85,
      dribbling: 92,
      defending: 55,
      physical: 68,
    },
  },

  {
    id: 14,
    name: "Erling Haaland",
    club: "Manchester City",
    nationality: "Norway",
    position: "Forward",
    statistics: {
      overall: 91,
      pace: 89,
      shooting: 94,
      passing: 65,
      dribbling: 80,
      defending: 45,
      physical: 92,
    },
  },
  {
    id: 15,
    name: "Kevin De Bruyne",
    club: "Manchester City",
    nationality: "Belgium",
    position: "Midfielder",
    statistics: {
      overall: 91,
      pace: 74,
      shooting: 86,
      passing: 93,
      dribbling: 88,
      defending: 64,
      physical: 78,
    },
  },

  {
    id: 16,
    name: "Kylian Mbappe",
    club: "Paris Saint-Germain",
    nationality: "France",
    position: "Forward",
    statistics: {
      overall: 92,
      pace: 97,
      shooting: 90,
      passing: 80,
      dribbling: 92,
      defending: 36,
      physical: 78,
    },
  },

  {
    id: 17,
    name: "Lautaro Martinez",
    club: "Inter Milan",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
      overall: 89,
      pace: 83,
      shooting: 88,
      passing: 75,
      dribbling: 86,
      defending: 40,
      physical: 82,
    },
  },

  {
    id: 18,
    name: "Rafael Leao",
    club: "AC Milan",
    nationality: "Portugal",
    position: "Forward",
    statistics: {
      overall: 88,
      pace: 94,
      shooting: 84,
      passing: 78,
      dribbling: 90,
      defending: 35,
      physical: 75,
    },
  },

  {
    id: 19,
    name: "Victor Osimhen",
    club: "Napoli",
    nationality: "Nigeria",
    position: "Forward",
    statistics: {
      overall: 89,
      pace: 90,
      shooting: 88,
      passing: 70,
      dribbling: 82,
      defending: 40,
      physical: 86,
    },
  },

  {
    id: 20,
    name: "Antoine Griezmann",
    club: "Atletico Madrid",
    nationality: "France",
    position: "Forward",
    statistics: {
      overall: 88,
      pace: 80,
      shooting: 86,
      passing: 88,
      dribbling: 87,
      defending: 55,
      physical: 72,
    },
  },
];

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
