import { useEffect } from 'react';

import { Button, Center, Heading } from '@chakra-ui/react';

import { getLayout } from '@/common/components/Layout';
import useAppSelector from '@/common/hooks/useAppSelector';
import { useLazyGetListOfMoveQuery } from '@/features/pokemon/api';
import MoveCardGrid from '@/features/pokemon/MoveCardGrid';
import { selectLastMoveIds } from '@/features/pokemon/schema';

const PAGE_SIZE = 6;

const MoveListPage = (): JSX.Element => {
  const moveIds = useAppSelector(selectLastMoveIds) as string[];
  const [fetchMore, { isFetching }] = useLazyGetListOfMoveQuery();

  const handleFetchMore = () => {
    fetchMore({
      limit: PAGE_SIZE,
      offset: moveIds.length,
    });
  };

  useEffect(() => {
    if (moveIds.length === 0 && !isFetching) {
      fetchMore({ limit: PAGE_SIZE, offset: 0 });
    }
  }, [fetchMore, isFetching, moveIds.length]);

  return (
    <>
      <Heading>Showing {moveIds.length} Moves</Heading>
      <MoveCardGrid ids={moveIds} />
      <Center>
        <Button onClick={handleFetchMore} isLoading={isFetching}>
          Get More
        </Button>
      </Center>
    </>
  );
};

MoveListPage.getLayout = getLayout;

export default MoveListPage;
