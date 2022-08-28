import { getLayout } from '@/common/components/Layout';
import useAppSelector from '@/common/hooks/useAppSelector';
import { useGetListOfPokemonQuery } from '@/features/pokemon/api';
import PokemonCardGrid from '@/features/pokemon/PokemonCardGrid';
import { pokemonSelector } from '@/features/pokemon/schema';

const PokemonListPage = (): JSX.Element => {
  const pokemonIds = useAppSelector(pokemonSelector.selectIds) as string[];

  // TODO: add pagination state
  useGetListOfPokemonQuery(
    { offset: 0, limit: 20 },
    { skip: pokemonIds.length >= 20 },
  );

  return <PokemonCardGrid ids={pokemonIds} />;
};

PokemonListPage.getLayout = getLayout;

export default PokemonListPage;
