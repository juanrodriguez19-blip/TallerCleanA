export default class GetAllSongs {
  constructor(SongRepository) {
    this.SongRepository = SongRepository;
  }

async execute() {
    return await this.SongRepository.findAll();
  }
}
