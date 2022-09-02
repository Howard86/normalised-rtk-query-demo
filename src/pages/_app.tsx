import { ReactElement, ReactNode } from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Provider as ReduxProvider } from 'react-redux';

import store from '@/app/redux/store';
import theme from '@/app/theme';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
  require('../../mocks');
}

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const UnitGetLayout = (page: ReactElement) => page;

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? UnitGetLayout;

  return (
    <ReduxProvider store={store}>
      <ChakraProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </ReduxProvider>
  );
};

export default App;
