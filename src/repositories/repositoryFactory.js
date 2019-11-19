import RepositoryGames from "./repositoryGames";
import RepositoryMedia from "./repositoryMedia";

const repositories = {
    media: RepositoryMedia,
    games: RepositoryGames
    // other repositories ...
};

export const RepositoryFactory = {
    get: name => repositories[name]
};
