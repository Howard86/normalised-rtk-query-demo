import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Heading,
  HStack,
  List,
  ListItem,
  Tag,
} from '@chakra-ui/react';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
      <Container>
        <Breadcrumb fontWeight="medium">
          <BreadcrumbItem>
            <Link href="/" passHref>
              <BreadcrumbLink>Home</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href={`/move/${move.data.name}`} passHref>
              <BreadcrumbLink>{move.data.name}</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex as="section">
          <Box>
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
        </Flex>
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
      </Container>
    </>
  );
};

export default MovePage;
