import {
  Box,
  Flex,
  Heading,
  HStack,
  List,
  ListItem,
  Tag,
} from '@chakra-ui/react';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { getLayout } from '@/common/components/Layout';
import RouteLink from '@/common/components/RouteLink';
import useAppSelector from '@/common/hooks/useAppSelector';
import { useGetPokemonByNameQuery } from '@/features/pokemon/api';
import { pokemonSelector } from '@/features/pokemon/schema';

const PokemonPage = () => {
  const router = useRouter();
  const pokemonName =
    typeof router.query.name === 'string' ? router.query.name : '';

  const pokemon = useAppSelector((state) =>
    pokemonSelector.selectById(state, pokemonName),
  );
  useGetPokemonByNameQuery(pokemonName || skipToken);

  if (!router.isReady || !pokemon || pokemon.type !== 'item') return null;

  return (
    <>
      <Head>
        <title>{pokemon.data.name}</title>
      </Head>
      <Flex as="section">
        <Image
          src={pokemon.data.sprites.front_default}
          width={100}
          height={100}
        />
        <Box>
          <Heading mb="2">{pokemon.data.name}</Heading>
          <HStack>
            {pokemon.data.types.map((type) => (
              <Tag key={type.slot}>{type.type.name}</Tag>
            ))}
          </HStack>
        </Box>
      </Flex>
      <Box as="section">
        <Heading as="h2" size="sm">
          Moves
        </Heading>
        <List>
          {pokemon.data.moves.map((move) => (
            <ListItem key={move.move.name}>
              <RouteLink href={`/move/${move.move.name}`}>
                {move.move.name}
              </RouteLink>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

PokemonPage.getLayout = getLayout;

export default PokemonPage;
