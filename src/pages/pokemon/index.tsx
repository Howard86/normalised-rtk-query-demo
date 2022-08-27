import { List, ListItem } from '@chakra-ui/react';
import Image from 'next/image';

import { getLayout } from '@/common/components/Layout';
import RouteLink from '@/common/components/RouteLink';
import useAppSelector from '@/common/hooks/useAppSelector';
import { useGetListOfPokemonQuery } from '@/features/pokemon/api';
import { pokemonSelector } from '@/features/pokemon/schema';

const PokemonListPage = (): JSX.Element => {
  const pokemonList = useAppSelector(pokemonSelector.selectAll);

  // TODO: add pagination state
  useGetListOfPokemonQuery({ offset: 0, limit: 20 });

  return (
    <List>
      {pokemonList.map((pokemon) => (
        <ListItem key={pokemon.data.name}>
          {pokemon.type === 'list' ? (
            <RouteLink href={`/pokemon/${pokemon.data.name}`}>
              {pokemon.data.name}
            </RouteLink>
          ) : (
            <>
              <Image
                src={pokemon.data.sprites.front_default}
                width={100}
                height={100}
              />
              <RouteLink href={`/pokemon/${pokemon.data.name}`}>
                {pokemon.data.name}
              </RouteLink>
            </>
          )}
        </ListItem>
      ))}
    </List>
  );
};

PokemonListPage.getLayout = getLayout;

export default PokemonListPage;
