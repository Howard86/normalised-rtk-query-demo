import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  List,
  ListItem,
} from '@chakra-ui/react';
import Link from 'next/link';

import RouteLink from '@/common/components/RouteLink';
import { useGetListOfPokemonQuery } from '@/features/pokemon/api';

const Home = (): JSX.Element => {
  // TODO: add pagination state
  const pokemonList = useGetListOfPokemonQuery({ offset: 0, limit: 20 });

  return (
    <Container>
      <Breadcrumb fontWeight="medium">
        <BreadcrumbItem>
          <Link href="/" passHref>
            <BreadcrumbLink>Home</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <List>
        {pokemonList.data?.results.map((pokemon) => (
          <ListItem key={pokemon.name}>
            <RouteLink href={`/pokemon/${pokemon.name}`}>
              {pokemon.name}
            </RouteLink>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Home;
