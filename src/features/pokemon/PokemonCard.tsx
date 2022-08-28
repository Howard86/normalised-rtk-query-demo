import {
  Avatar,
  Box,
  Button,
  chakra,
  CircularProgress,
  Flex,
  HStack,
  LinkBox,
  LinkOverlay,
  Skeleton,
  Tag,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { CgPokemon } from 'react-icons/cg';

import {
  useGetPokemonSpeciesByNameQuery,
  useLazyGetPokemonByNameQuery,
} from './api';
import { LANGUAGE_NAME } from './constants';
import usePokemon from './usePokemon';
import { getColorByType } from './util';

const PokemonCard = ({ name }: Pokemon.NameIndex) => {
  const [fetchPokemonByName, { isLoading }] = useLazyGetPokemonByNameQuery();
  const pokemon = usePokemon(name, true);
  const species = useGetPokemonSpeciesByNameQuery(name, {
    skip: pokemon.data?.type !== 'item',
    selectFromResult: (res) => ({
      ...res,
      description: res.data?.flavor_text_entries.find(
        (entry) => entry.language.name === LANGUAGE_NAME,
      )?.flavor_text,
    }),
  });

  if (!pokemon.data) return null;

  return (
    <LinkBox
      display="flex"
      pos="relative"
      justifyContent="center"
      p={4}
      as="article"
      bg="white"
      shadow="lg"
      rounded="lg"
      textTransform="capitalize"
      gap={4}
    >
      <Tag
        pos="absolute"
        colorScheme="red"
        top="-2"
        left="-2"
        shadow="md"
        bgGradient="linear(to-r, orange.200, red.400)"
      >
        #{pokemon.data.data.id}
      </Tag>
      <Box flexShrink={0} w="48px" alignSelf="center">
        {pokemon.data.type === 'list' ? (
          <Avatar
            size="sm"
            bgColor="gray.50"
            icon={
              isLoading ? (
                <CircularProgress size="18px" isIndeterminate />
              ) : (
                <CgPokemon size="24px" />
              )
            }
          />
        ) : (
          <Image
            alt={pokemon.data.data.name}
            src={
              pokemon.data.data.sprites.other['official-artwork']
                .front_default ?? pokemon.data.data.sprites.front_default
            }
            width={48}
            height={48}
            objectFit="fill"
            objectPosition="center"
          />
        )}
      </Box>

      <Flex flexDir="column" alignItems="start" flex={1} gap={2}>
        <chakra.h2 fontSize="lg" fontWeight="bold" color="gray.800" flex={0}>
          <Link href={`/pokemon/${pokemon.data.data.name}`} passHref>
            <LinkOverlay noOfLines={1}>{pokemon.data.data.name}</LinkOverlay>
          </Link>
        </chakra.h2>
        {pokemon.data.type === 'list' ? (
          <Button
            my="auto"
            mx="auto"
            size="xs"
            isLoading={isLoading}
            onClick={(event) => {
              event.stopPropagation();
              if (pokemon.data) {
                fetchPokemonByName(pokemon.data.data.name);
              }
            }}
          >
            Show More
          </Button>
        ) : (
          <>
            <HStack spacing={1}>
              {pokemon.data.data.types.map((type) => (
                <Tag
                  key={type.slot}
                  size="sm"
                  bgColor={getColorByType(type.type.name)}
                  color="white"
                >
                  {type.type.name}
                </Tag>
              ))}
            </HStack>
            <Skeleton isLoaded={Boolean(species.data)}>
              <chakra.p lineHeight="4" fontSize="sm">
                {species.description}
              </chakra.p>
            </Skeleton>
            <chakra.p fontWeight="bold" fontSize="sm" mt="auto">
              {pokemon.data.data.moves.length} moves
            </chakra.p>
          </>
        )}
      </Flex>
    </LinkBox>
  );
};

export default PokemonCard;
