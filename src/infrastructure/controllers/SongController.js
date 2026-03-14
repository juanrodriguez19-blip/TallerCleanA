export default class SongController {
  constructor({ createSong, getAllSongs }) {
    this.createSong   = createSong;
    this.getAllSongs   = getAllSongs; 
}
async create(req, res) {
    try {
      const song = await this.createSong.execute(req.body);
      res.status(201).json(song);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  async getAll(req, res) {
    try {
      const songs = await this.getAllSongs.execute();
      res.status(200).json(songs);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
