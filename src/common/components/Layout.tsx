import { ChildrenProps, ReactElement } from 'react';

import { Container, Flex } from '@chakra-ui/react';

import DynamicBreadcrumb from './DynamicBreadcrumb';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: ChildrenProps) => (
  <Flex flexDir="column" h="100vh">
    <Header />
    <Container
      as="main"
      display="flex"
      flexDir="column"
      gap={2}
      flex={1}
      maxW="container.lg"
      overflowY="auto"
      py="4"
    >
      <DynamicBreadcrumb />
      {children}
    </Container>
    <Footer />
  </Flex>
);

export const getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Layout;
