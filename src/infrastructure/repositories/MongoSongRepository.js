import SongRepository from "../../domain/repositories/SongRepository.js";
import SongModel      from "../database/models/SongModel.js";

export default class MongoSongRepository extends SongRepository {
  async save(song) {
    const created = await SongModel.create(song);
    return created;
  }

  async findAll() {
    return await SongModel.find();
  }
}