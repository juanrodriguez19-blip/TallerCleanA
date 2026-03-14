import SongRepository from "../../domain/repositories/SongRepository.js";
import SongModel      from "../database/models/SongModel.js";

export default class MongoSongRepository extends SongRepository {
  async save(song) {
    await SongModel.findOneAndUpdate(
      { id: song.id },
      song,
      { upsert: true, new: true }
    );
    return song;
  }

  async findAll() {
    return await SongModel.find();
  }

  async findBySku(sku) {
    return await SongModel.findOne({ sku }) ?? null;
  }

  async delete(id) {
    const result = await SongModel.findOneAndDelete({ id });
    if (!result) throw new Error(`Song with id "${id}" not found`);
  }
}