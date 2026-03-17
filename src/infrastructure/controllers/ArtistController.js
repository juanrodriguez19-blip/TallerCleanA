export default class ArtistController {
  constructor({ createArtist, getAllArtists }) {
    this.createArtist  = createArtist;
    this.getAllArtists  = getAllArtists;
  }

  async create(req, res) {
    try {
      const artist = await this.createArtist.execute(req.body);
      res.status(201).json(artist);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const artists = await this.getAllArtists.execute();
      res.status(200).json(artists);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
