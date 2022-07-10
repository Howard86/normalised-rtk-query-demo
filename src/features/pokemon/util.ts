export const getResourceId = (item: Pokemon.NamedAPIResource) => {
  const urlPaths = item.url.split('/');

  return Number.parseInt(urlPaths[urlPaths.length - 2], 10);
};

export const mapResourceToNormalisedList = <K extends Pokemon.Index>(
  item: Pokemon.NamedAPIResource,
): Pokemon.Normalised<K> => ({
  type: 'list',
  data: {
    id: getResourceId(item),
    name: item.name,
    url: item.url,
  },
});
