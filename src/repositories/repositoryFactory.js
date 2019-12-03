import RepositoryGames from "./repositoryGames";
import RepositoryMedia from "./repositoryMedia";
import RepositoryFirestore from "./repositoryFirestore";

const repositories = {
  media: RepositoryMedia,
  games: RepositoryGames,
  firestore: RepositoryFirestore
  // other repositories ...
};

export const RepositoryFactory = {
  get: name => repositories[name]
};
