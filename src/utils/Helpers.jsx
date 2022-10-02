export const getCharacter = (data) => {
  const min = data[0].episode.length;
  const residentsOrigin = data.filter(
    (item) => item.origin.name === "Earth (C-137)"
  );
  return residentsOrigin.reduce(
    (acc, item) => (item.episode.length < acc ? item : acc),
    min
  );
};

export const getCharactersId = (data) => {
  const charactersId = data.residents.map(
    (item) => item.split("character/")[1]
  );
  return charactersId;
};

export const filterEpisodes = (data) => {
  const episodes = data.episode.map((item) => item.split("episode/")[1]);
  return episodes;
};

export const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};
