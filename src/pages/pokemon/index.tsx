import { useEffect } from 'react';

import { Button, Center, Heading } from '@chakra-ui/react';

import { getLayout } from '@/common/components/Layout';
import useAppSelector from '@/common/hooks/useAppSelector';
import { useLazyGetListOfPokemonQuery } from '@/features/pokemon/api';
import PokemonCardGrid from '@/features/pokemon/PokemonCardGrid';
import { selectLastPokemonIds } from '@/features/pokemon/schema';

const PAGE_SIZE = 6;

const PokemonListPage = (): JSX.Element => {
  const pokemonIds = useAppSelector(selectLastPokemonIds) as string[];
  const [fetchMore, { isFetching }] = useLazyGetListOfPokemonQuery();

  const handleFetchMore = () => {
    fetchMore({
      limit: PAGE_SIZE,
      offset: pokemonIds.length,
    });
  };

  useEffect(() => {
    if (pokemonIds.length === 0 && !isFetching) {
      fetchMore({ limit: PAGE_SIZE, offset: 0 });
    }
  }, [fetchMore, isFetching, pokemonIds.length]);

  return (
    <>
      <Heading>Showing {pokemonIds.length} Pokemons</Heading>
      <PokemonCardGrid ids={pokemonIds} />
      <Center>
        <Button onClick={handleFetchMore} isLoading={isFetching}>
          Get More
        </Button>
      </Center>
    </>
  );
};

PokemonListPage.getLayout = getLayout;

export default PokemonListPage;
