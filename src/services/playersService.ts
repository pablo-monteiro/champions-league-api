import { PlayerModel } from "../models/playersModel";
import {
  insertPlayer,
  findAllPlayers,
  findPlayerById,
} from "../repositories/playersRepository";
import * as HttpResponse from "../utils/httpHelper";

export const getAllPlayersService = async () => {
  const data = await findAllPlayers();
  let response = null;

  if (!data) {
    response = await HttpResponse.noContent();
  } else {
    response = await HttpResponse.ok(data);
  }

  return response;
};

export const getPlayerByIdService = async (id: number) => {
  const data = await findPlayerById(id);
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
    await insertPlayer(player);
    response = await HttpResponse.created();
  } else {
    response = await HttpResponse.badRequest();
  }

  return response;
};
