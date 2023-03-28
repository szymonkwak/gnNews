import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { screen } from '@testing-library/react';
import { i18nTranslationMock, render } from './config';
import { store } from '../store';
import { articlesMock } from './mocks/articlesMock';
import { MainContent } from '../components';

jest.mock('react-i18next', () => i18nTranslationMock());

const handlers = [
  rest.get('https://api.worldnewsapi.com/search-news', (req, res, ctx) => {
    return res(ctx.json({ news: articlesMock }), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('NewsGrid tests', () => {
  it('should display loading state and articles after fetching', async () => {
    render(<MainContent />, { store });

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    expect(screen.queryByText(/article 1 title/i)).not.toBeInTheDocument();

    expect(await screen.findByText(/article 1 title/i)).toBeInTheDocument();
  });
});
