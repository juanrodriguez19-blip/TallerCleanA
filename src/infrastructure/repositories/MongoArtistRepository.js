import ArtistRepository from "../../domain/repositories/ArtistRepository.js";
import ArtistModel      from "../database/models/ArtistModel.js";

export default class MongoArtistRepository extends ArtistRepository {
  async save(artist) {
    const created = await ArtistModel.create(artist);
    return created;
  }

  async findAll() {
    return await ArtistModel.find();
  }
}