import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';

import RouteLink from '@/common/components/RouteLink';

const Home = () => (
  <>
    <Head>
      <title>Pokedex</title>
    </Head>
    <Container>
      <Breadcrumb fontWeight="medium">
        <BreadcrumbItem>
          <Link href="/" passHref>
            <BreadcrumbLink>Home</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <Heading>Pokedex</Heading>
      <Text>Select the following</Text>
      <List>
        <ListItem>
          <RouteLink href="/pokemon">Pokemon</RouteLink>
        </ListItem>
        <ListItem>
          <RouteLink href="/move">Pokemon Move</RouteLink>
        </ListItem>
      </List>
    </Container>
  </>
);

export default Home;
