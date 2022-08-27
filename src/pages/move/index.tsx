import { List, ListItem } from '@chakra-ui/react';

import { getLayout } from '@/common/components/Layout';
import RouteLink from '@/common/components/RouteLink';
import useAppSelector from '@/common/hooks/useAppSelector';
import { useGetListOfMoveQuery } from '@/features/pokemon/api';
import { moveSelector } from '@/features/pokemon/schema';

const MoveListPage = (): JSX.Element => {
  const moveList = useAppSelector(moveSelector.selectAll);

  // TODO: add pagination state
  useGetListOfMoveQuery({ offset: 0, limit: 20 });

  return (
    <List>
      {moveList.map((move) => (
        <ListItem key={move.data.name}>
          <RouteLink href={`/move/${move.data.name}`}>
            {move.data.name} {move.type === 'item' && move.data.pp}
          </RouteLink>
        </ListItem>
      ))}
    </List>
  );
};

MoveListPage.getLayout = getLayout;

export default MoveListPage;
