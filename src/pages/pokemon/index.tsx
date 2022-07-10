import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  List,
  ListItem,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import RouteLink from '@/common/components/RouteLink';
import useAppSelector from '@/common/hooks/useAppSelector';
import { useGetListOfPokemonQuery } from '@/features/pokemon/api';
import { pokemonSelector } from '@/features/pokemon/schema';

const PokemonListPage = (): JSX.Element => {
  const pokemonList = useAppSelector(pokemonSelector.selectAll);

  // TODO: add pagination state
  useGetListOfPokemonQuery({ offset: 0, limit: 20 });

  return (
    <Container>
      <Breadcrumb fontWeight="medium">
        <BreadcrumbItem>
          <Link href="/" passHref>
            <BreadcrumbLink>Home</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href="/pokemon" passHref>
            <BreadcrumbLink>Pokemon</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <List>
        {pokemonList.map((pokemon) => (
          <ListItem key={pokemon.data.name}>
            {pokemon.type === 'list' ? (
              <RouteLink href={`/pokemon/${pokemon.data.name}`}>
                {pokemon.data.name}
              </RouteLink>
            ) : (
              <>
                <Image
                  src={pokemon.data.sprites.front_default}
                  width={100}
                  height={100}
                />
                <RouteLink href={`/pokemon/${pokemon.data.name}`}>
                  {pokemon.data.name}
                </RouteLink>
              </>
            )}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PokemonListPage;
