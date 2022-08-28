import { getLayout } from '@/common/components/Layout';
import useAppSelector from '@/common/hooks/useAppSelector';
import { useGetListOfMoveQuery } from '@/features/pokemon/api';
import MoveCardGrid from '@/features/pokemon/MoveCardGrid';
import { moveSelector } from '@/features/pokemon/schema';

const MoveListPage = (): JSX.Element => {
  const moveIds = useAppSelector(moveSelector.selectIds) as string[];

  // TODO: add pagination state
  useGetListOfMoveQuery(
    { offset: 0, limit: 20 },
    { skip: moveIds.length >= 20 },
  );

  return <MoveCardGrid ids={moveIds} />;
};

MoveListPage.getLayout = getLayout;

export default MoveListPage;
