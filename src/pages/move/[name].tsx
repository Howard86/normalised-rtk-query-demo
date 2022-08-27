import { Box, Heading, HStack, List, ListItem, Tag } from '@chakra-ui/react';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { getLayout } from '@/common/components/Layout';
import RouteLink from '@/common/components/RouteLink';
import useAppSelector from '@/common/hooks/useAppSelector';
import { useGetPokemonMoveByNameQuery } from '@/features/pokemon/api';
import { moveSelector } from '@/features/pokemon/schema';

const MovePage = () => {
  const router = useRouter();
  const moveName =
    typeof router.query.name === 'string' ? router.query.name : '';
  const move = useAppSelector((state) =>
    moveSelector.selectById(state, moveName),
  );

  useGetPokemonMoveByNameQuery(moveName || skipToken);

  if (!router.isReady || move?.type !== 'item') return null;

  return (
    <>
      <Head>
        <title>{move.data.name}</title>
      </Head>
      <Box as="section">
        <Heading mb="2">{move.data.name}</Heading>
        <HStack>
          <Tag>{move.data.type.name}</Tag>
          <Tag variant="solid">{move.data.damage_class.name}</Tag>
          <Tag variant="outline">Power: {move.data.power}</Tag>
          <Tag variant="outline">PP: {move.data.pp}</Tag>
          <Tag variant="outline">
            {`Accuracy: ${move.data.accuracy ?? '-'}`}
          </Tag>
        </HStack>
      </Box>
      <Box as="section">
        <Heading as="h2" size="sm">
          Pokemons
        </Heading>
        <List>
          {move.data.learned_by_pokemon.map((pokemon) => (
            <ListItem key={pokemon.name}>
              <RouteLink href={`/pokemon/${pokemon.name}`}>
                {pokemon.name}
              </RouteLink>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

MovePage.getLayout = getLayout;

export default MovePage;
