import Song from "../../domain/entities/Song.js";

export default class CreateSong {
  constructor(SongRepository) {
    this.SongRepository = SongRepository;
  }

  async execute({ name, second  }) {
    const song = new Song({ name, second });
    return await this.SongRepository.save(song);
  }
}
