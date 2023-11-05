const getGifs = async (categoria) => {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=Gt6RbaAcEMr1tVAB1dKOZLSLV9A5LGj1&q=${encodeURI(
    categoria
  )}&limit=10`;
  const resp = await fetch(apiUrl);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};

export default getGifs;
