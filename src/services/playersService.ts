import { PlayerModel } from "../models/playersModel";
import { StatisticsModel } from "../models/statisticsModel";
import {
  insertPlayerRepository,
  findAllPlayersRepository,
  findPlayerByIdRepository,
  deletePlayerRepository,
  findAndModifyPlayerRepository,
} from "../repositories/playersRepository";
import * as HttpResponse from "../utils/httpHelper";

export const getAllPlayersService = async () => {
  const data = await findAllPlayersRepository();
  let response = null;

  if (!data) {
    response = await HttpResponse.noContent();
  } else {
    response = await HttpResponse.ok({
      message: "Players found successfully",
      data: data,
    });
  }

  return response;
};

export const getPlayerByIdService = async (id: number) => {
  const data = await findPlayerByIdRepository(id);
  let response = null;

  if (!data) {
    response = await HttpResponse.noContent();
  } else {
    response = await HttpResponse.ok({
      message: "Player found successfully",
      data: data,
    });
  }

  return response;
};

export const postPlayerService = async (player: PlayerModel) => {
  let response = null;

  if (Object.keys(player).length !== 0) {
    const insertData = await insertPlayerRepository(player);
    response = await HttpResponse.created({
      message: "Player created successfully",
      data: insertData,
    });
  } else {
    response = await HttpResponse.badRequest();
  }

  return response;
};

export const deletePlayerService = async (id: number) => {
  let response = null;
  const isDeleted = await deletePlayerRepository(id);

  if (isDeleted) {
    response = await HttpResponse.ok({
      message: "Player deleted successfully",
    });
  } else {
    response = await HttpResponse.badRequest();
  }

  return response;
};

export const updatePlayerService = async (
  id: number,
  statistics: StatisticsModel,
) => {
  const data = await findAndModifyPlayerRepository(id, statistics);
  let response = null;

  if (Object.keys(data).length !== 0) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.badRequest();
  }

  return response;
};
