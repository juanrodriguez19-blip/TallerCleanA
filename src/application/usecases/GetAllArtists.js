export default class GetAllArtists {
  constructor(ArtistRepository) {
    this.ArtistRepository = ArtistRepository;
  }

async execute() {
    return await this.ArtistRepository.findAll();
  }
}
