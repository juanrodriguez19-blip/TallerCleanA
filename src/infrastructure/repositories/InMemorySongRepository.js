import SongRepository from "../../domain/repositories/SongRepository.js";

export default class InMemorySongRepository extends SongRepository {
  constructor() {
    super();
    this.songs = [];
  }
  async save(song) {
    const index = this.songs.findIndex(p => p.id === song.id);
    if (index >= 0) {
      this.songs[index] = song;
    } else {
      this.songs.push(song);
    }
    return song;
  }
  async findAll() {
    return this.songs;
  }
}
