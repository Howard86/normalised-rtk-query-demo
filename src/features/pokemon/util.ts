export const getResourceId = (item: Pokemon.ResourceItem) => {
  const urlPaths = item.url.split('/');

  return Number.parseInt(urlPaths[urlPaths.length - 2], 10);
};

export const mapResourceToNormalisedList = <K extends Pokemon.Index>(
  item: Pokemon.ResourceItem,
): Pokemon.Normalised<K> => ({
  type: 'list',
  data: {
    id: getResourceId(item),
    name: item.name,
    url: item.url,
  },
});
