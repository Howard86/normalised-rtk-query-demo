import { SimpleGrid } from '@chakra-ui/react';

import MoveCard from './MoveCard';

interface MoveCardGridProps {
  ids: string[];
}

const MoveCardGrid = ({ ids }: MoveCardGridProps) => (
  <SimpleGrid
    columns={[2, 3, 4]}
    spacing={4}
    bg="gray.100"
    p={4}
    overflowY="scroll"
  >
    {ids.map((id) => (
      <MoveCard key={id} name={id} />
    ))}
  </SimpleGrid>
);

export default MoveCardGrid;
