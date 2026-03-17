import Artist from "../../domain/entities/Artist.js";

export default class CreateArtist {
  constructor(ArtistRepository) {
    this.ArtistRepository = ArtistRepository;
  }

  async execute({ nickname, age }) {
    const artist = new Artist({ nickname, age });
    return await this.ArtistRepository.save(artist);
  }
}