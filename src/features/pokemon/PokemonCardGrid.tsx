import { SimpleGrid } from '@chakra-ui/react';

import PokemonCard from './PokemonCard';

interface PokemonCardGridProps {
  ids: string[];
}

const PokemonCardGrid = ({ ids }: PokemonCardGridProps) => (
  <SimpleGrid
    columns={[2, 2, 3]}
    bgColor="gray.100"
    spacing={8}
    p={4}
    flex={1}
    overflowY="auto"
  >
    {ids.map((id) => (
      <PokemonCard key={id} name={id} />
    ))}
  </SimpleGrid>
);

export default PokemonCardGrid;
