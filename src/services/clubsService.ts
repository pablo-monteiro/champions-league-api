import * as HttpResponse from "../utils/httpHelper";
import { findAllClubsRepository } from "../repositories/clubsRepository";

export const getClubsService = async () => {
  const data = await findAllClubsRepository();
  const response = HttpResponse.ok(data);
  return response;
};
