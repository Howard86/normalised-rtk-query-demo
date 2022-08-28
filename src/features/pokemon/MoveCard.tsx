import {
  Button,
  Center,
  chakra,
  Flex,
  LinkBox,
  LinkOverlay,
  Tag,
} from '@chakra-ui/react';
import Link from 'next/link';

import { useLazyGetPokemonMoveByNameQuery } from './api';
import useMove from './useMove';
import { getColorByType } from './util';

const EMPTY_TEXT = '-';

const MoveCard = ({ name }: Pokemon.NameIndex) => {
  const move = useMove(name, true);
  const [fetchMove, { isLoading }] = useLazyGetPokemonMoveByNameQuery();

  if (!move.data) return null;

  return (
    <LinkBox
      pos="relative"
      p={4}
      as="article"
      bg="white"
      shadow="lg"
      rounded="lg"
      textTransform="capitalize"
    >
      {move.data.type === 'list' ? (
        <>
          <Flex gap={1}>
            <Tag size="sm">?</Tag>
            <chakra.h2
              w="full"
              fontSize="sm"
              fontWeight="bold"
              color="gray.800"
              flex={1}
            >
              <Link href={`/move/${move.data.data.name}`} passHref>
                <LinkOverlay noOfLines={1}>{move.data.data.name}</LinkOverlay>
              </Link>
            </chakra.h2>
          </Flex>
          <Center h="full">
            <Button
              size="xs"
              isLoading={isLoading}
              onClick={(event) => {
                event.stopPropagation();
                if (move.data) {
                  fetchMove(move.data.data.name);
                }
              }}
            >
              Show More
            </Button>
          </Center>
        </>
      ) : (
        <>
          <Flex flexDir="column" alignItems="start" gap={1}>
            <Tag
              size="sm"
              color="white"
              bgColor={getColorByType(move.data.data.type.name)}
            >
              {move.data.data.type.name}
            </Tag>
            <chakra.h2
              w="full"
              fontSize="sm"
              fontWeight="bold"
              color="gray.800"
              flex={1}
            >
              <Link href={`/move/${move.data.data.name}`} passHref>
                <LinkOverlay noOfLines={1}>{move.data.data.name}</LinkOverlay>
              </Link>
            </chakra.h2>
            <chakra.p lineHeight="4" fontSize="sm">
              {move.description}
            </chakra.p>
          </Flex>
          <Flex flexWrap="wrap" gap={1} mt={4}>
            <Tag variant="solid" size="sm">
              {move.data.data.damage_class.name}
            </Tag>
            <Tag variant="outline" size="sm">
              Power: {move.data.data.power ?? EMPTY_TEXT}
            </Tag>
            <Tag variant="outline" size="sm">
              PP: {move.data.data.pp}
            </Tag>
            <Tag variant="outline" size="sm">
              {`Accuracy: ${move.data.data.accuracy ?? EMPTY_TEXT}`}
            </Tag>
          </Flex>
        </>
      )}
    </LinkBox>
  );
};

export default MoveCard;
