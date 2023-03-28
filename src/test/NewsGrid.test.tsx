import { screen } from '@testing-library/react';
import { i18nTranslationMock, render } from './config';
import { store } from '../store';
import { Languages } from '../store/general/generalTypes';
import { articlesMock } from './mocks/articlesMock';
import NewsGrid from '../components/MainContent/NewsGrid';

jest.mock('react-i18next', () => i18nTranslationMock());

describe('NewsGrid tests', () => {
  it('should display correct article source from provided url', () => {
    render(<NewsGrid articles={articlesMock} lng={Languages.PL} setArticleInModal={jest.fn} />, { store });

    expect(screen.getByText(/www.example.com/i)).toBeInTheDocument();
  });

  it('should display page without content', () => {
    render(<NewsGrid articles={[]} lng={Languages.PL} setArticleInModal={jest.fn} />, { store });

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
