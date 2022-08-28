import { Heading, List, ListItem } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { getLayout } from '@/common/components/Layout';
import RouteLink from '@/common/components/RouteLink';
import PokemonCard from '@/features/pokemon/PokemonCard';
import usePokemon from '@/features/pokemon/usePokemon';

const SKIP_NAME = '_SKIP_NAME';

const PokemonPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const shouldSkip = typeof name !== 'string';

  const pokemon = usePokemon(shouldSkip ? SKIP_NAME : name, shouldSkip);

  if (!router.isReady || pokemon.data?.type !== 'item') return null;

  return (
    <>
      <PokemonCard name={pokemon.data.data.name} />
      <Heading as="h2" size="sm">
        Moves
      </Heading>
      <List h="max-content" flex={1} overflowY="auto">
        {pokemon.data.data.moves.map((move) => (
          <ListItem key={move.move.name}>
            <RouteLink href={`/move/${move.move.name}`}>
              {move.move.name}
            </RouteLink>
          </ListItem>
        ))}
      </List>
    </>
  );
};

PokemonPage.getLayout = getLayout;

export default PokemonPage;
