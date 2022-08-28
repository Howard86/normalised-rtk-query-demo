import { Box, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { getLayout } from '@/common/components/Layout';
import { SKIP_NAME } from '@/features/pokemon/constants';
import MoveCard from '@/features/pokemon/MoveCard';
import PokemonCardGrid from '@/features/pokemon/PokemonCardGrid';
import useMove from '@/features/pokemon/useMove';

const MovePage = () => {
  const router = useRouter();
  const { name } = router.query;
  const shouldSkip = typeof name !== 'string';

  const move = useMove(shouldSkip ? SKIP_NAME : name, shouldSkip);

  if (!router.isReady || !move.data) return null;

  return (
    <>
      <Box as="section">
        <MoveCard name={move.data.data.name} />
      </Box>
      {move.data.type === 'item' && (
        <>
          <Heading as="h2" size="sm">
            Learned by following {move.data.data.learned_by_pokemon.length}{' '}
            Pokemons
          </Heading>
          <PokemonCardGrid ids={move.data.data.learned_by_pokemon} />
        </>
      )}
    </>
  );
};

MovePage.getLayout = getLayout;

export default MovePage;
