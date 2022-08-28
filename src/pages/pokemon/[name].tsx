import { Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { getLayout } from '@/common/components/Layout';
import { SKIP_NAME } from '@/features/pokemon/constants';
import MoveCardGrid from '@/features/pokemon/MoveCardGrid';
import PokemonCard from '@/features/pokemon/PokemonCard';
import usePokemon from '@/features/pokemon/usePokemon';

const PokemonPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const shouldSkip = typeof name !== 'string';

  const pokemon = usePokemon(shouldSkip ? SKIP_NAME : name, shouldSkip);

  if (!router.isReady || !pokemon.data) return null;

  return (
    <>
      <PokemonCard name={pokemon.data.data.name} />
      <Heading as="h2" size="sm">
        Moves
      </Heading>
      {pokemon.data.type === 'item' && (
        <MoveCardGrid ids={pokemon.data.data.moves} />
      )}
    </>
  );
};

PokemonPage.getLayout = getLayout;

export default PokemonPage;
