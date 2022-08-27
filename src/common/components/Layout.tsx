import { ChildrenProps, ReactElement } from 'react';

import { Container, Flex } from '@chakra-ui/react';

import DynamicBreadcrumb from './DynamicBreadcrumb';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: ChildrenProps) => (
  <Flex flexDir="column" minH="full">
    <Header />
    <Container as="main" flex={1} maxW="container.lg">
      <DynamicBreadcrumb />
      {children}
    </Container>
    <Footer />
  </Flex>
);

export const getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Layout;
