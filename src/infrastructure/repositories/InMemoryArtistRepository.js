import ArtistRepository from "../../domain/repositories/ArtistRepository.js";

export default class InMemoryArtistRepository extends ArtistRepository {
  constructor() {
    super();
    this.artists = [];
  }
  async save(artist) {
    const index = this.artists.findIndex(p => p.id === artist.id);
    if (index >= 0) {
      this.artists[index] = artist;
    } else {
      this.artists.push(artist);
    }
    return artist;
  }
  async findAll() {
    return this.artists;
  }
}
