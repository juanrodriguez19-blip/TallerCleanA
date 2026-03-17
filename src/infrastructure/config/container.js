import MongoSongRepository from "../repositories/MongoSongRepository.js";
import CreateSong              from "../../application/usecases/CreateSong.js";
import GetAllSongs             from "../../application/usecases/GetAllSongs.js"; 
import SongController          from "../controllers/SongController.js";

import MongoArtistRepository  from "../repositories/MongoArtistRepository.js";
import CreateArtist           from "../../application/usecases/CreateArtist.js";
import GetAllArtists          from "../../application/usecases/GetAllArtists.js";
import ArtistController       from "../controllers/ArtistController.js";

// 1. Repositorios song
const songRepository = new MongoSongRepository();



// 2. Use cases song
const createSong   = new CreateSong(songRepository);
const getAllSongs   = new GetAllSongs(songRepository);

// 3. Controller song
const songController = new SongController({
  createSong,
  getAllSongs,
});

//1. Repositorios artist
const artistRepository = new MongoArtistRepository();

// 2. Use cases artist
const createArtist   = new CreateArtist(artistRepository);
const getAllArtists   = new GetAllArtists(artistRepository);

// 3. Controller artist
const artistController = new ArtistController({
  createArtist,
  getAllArtists,
});

export { songController, artistController };
