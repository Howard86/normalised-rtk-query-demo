import { SimpleGrid } from '@chakra-ui/react';

import { getLayout } from '@/common/components/Layout';
import useAppSelector from '@/common/hooks/useAppSelector';
import { useGetListOfPokemonQuery } from '@/features/pokemon/api';
import PokemonCard from '@/features/pokemon/PokemonCard';
import { pokemonSelector } from '@/features/pokemon/schema';

const PokemonListPage = (): JSX.Element => {
  const pokemonList = useAppSelector(pokemonSelector.selectAll);

  // TODO: add pagination state
  useGetListOfPokemonQuery({ offset: 0, limit: 20 });

  return (
    <SimpleGrid
      columns={[2, 2, 3]}
      bgColor="gray.100"
      spacing={8}
      p={4}
      flex={1}
    >
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.data.id} name={pokemon.data.name} />
      ))}
    </SimpleGrid>
  );
};

PokemonListPage.getLayout = getLayout;

export default PokemonListPage;
