import { PlayerModel } from "../models/playersModel";
import {
  insertPlayerRepository,
  findAllPlayersRepository,
  findPlayerByIdRepository,
  deletePlayerRepository,
} from "../repositories/playersRepository";
import * as HttpResponse from "../utils/httpHelper";

export const getAllPlayersService = async () => {
  const data = await findAllPlayersRepository();
  let response = null;

  if (!data) {
    response = await HttpResponse.noContent();
  } else {
    response = await HttpResponse.ok(data);
  }

  return response;
};

export const getPlayerByIdService = async (id: number) => {
  const data = await findPlayerByIdRepository(id);
  let response = null;

  if (!data) {
    response = await HttpResponse.noContent();
  } else {
    response = await HttpResponse.ok(data);
  }

  return response;
};

export const postPlayerService = async (player: PlayerModel) => {
  let response = null;

  if (Object.keys(player).length !== 0) {
    await insertPlayerRepository(player);
    response = await HttpResponse.created();
  } else {
    response = await HttpResponse.badRequest();
  }

  return response;
};

export const deletePlayerService = async (id: number) => {
  let response = null;

  await deletePlayerRepository(id);
  response = await HttpResponse.ok({ message: "Player deleted successfully" });

  return response;
};
