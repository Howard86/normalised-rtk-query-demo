import Head from 'next/head';

import Hero from '@/common/components/Hero';
import { getLayout } from '@/common/components/Layout';

const Home = () => (
  <>
    <Head>
      <title>Pokedex</title>
    </Head>
    <Hero as="main" flex={1} />
  </>
);

Home.getLayout = getLayout;

export default Home;
