import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Heading,
  HStack,
  Tag,
  Text,
} from '@chakra-ui/react';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
      <Container>
        <Breadcrumb fontWeight="medium">
          <BreadcrumbItem>
            <Link href="/" passHref>
              <BreadcrumbLink>Home</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href={`/pokemon/${pokemon.data.name}`} passHref>
              <BreadcrumbLink>{pokemon.data.name}</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
        </Breadcrumb>
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
          {pokemon.data.moves.map((move) => (
            <Text key={move.move.name}>{move.move.name}</Text>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default PokemonPage;
