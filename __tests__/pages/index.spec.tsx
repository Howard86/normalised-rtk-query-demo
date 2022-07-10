import { appRender } from 'test-utils';

import Home from '@/pages/index';

describe('home', () => {
  it('renders Home', () => {
    expect.hasAssertions();
    appRender(<Home />);

    expect(document.title).toBe('Pokedex');
  });
});
