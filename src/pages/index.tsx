import { Flex } from '@chakra-ui/react';
import Head from 'next/head';

import Footer from '@/common/components/Footer';
import Header from '@/common/components/Header';
import Hero from '@/common/components/Hero';

const Home = () => (
  <>
    <Head>
      <title>Pokedex</title>
    </Head>
    <Flex flexDir="column" minH="full">
      <Header />
      <Hero as="main" flex={1} />
      <Footer />
    </Flex>
  </>
);

export default Home;
