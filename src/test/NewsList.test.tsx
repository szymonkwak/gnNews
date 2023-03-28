import { screen } from '@testing-library/react';
import { i18nTranslationMock, render } from './config';
import { store } from '../store';
import { Languages } from '../store/general/generalTypes';
import { articlesMock } from './mocks/articlesMock';
import NewsList from '../components/MainContent/NewsList';

jest.mock('react-i18next', () => i18nTranslationMock());

describe('NewsList tests', () => {
  it('should display correct article source from provided url', () => {
    render(<NewsList articles={articlesMock} lng={Languages.PL} setArticleInModal={jest.fn} />, { store });

    expect(screen.getByText(/www.example.com/i)).toBeInTheDocument();
  });

  it('should display table without content', () => {
    render(<NewsList articles={[]} lng={Languages.PL} setArticleInModal={jest.fn} />, { store });

    expect(screen.queryByRole('cell')).not.toBeInTheDocument();
  });
});
