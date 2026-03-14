import MongoSongRepository from "../repositories/MongoSongRepository.js";
import CreateSong              from "../../application/usecases/CreateSong.js";
import GetAllSongs             from "../../application/usecases/GetAllSongs.js"; 
import SongController          from "../controllers/SongController.js";

// 1. Repositorio
const repository = new MongoSongRepository();



// 2. Use cases
const createSong   = new CreateSong(repository);
const getAllSongs   = new GetAllSongs(repository);

// 3. Controller
const songController = new SongController({
  createSong,
  getAllSongs,
});

export { songController };
