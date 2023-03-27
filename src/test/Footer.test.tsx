import { screen } from '@testing-library/react';
import { i18nTranslationMock, render } from './config';
import { store } from '../store';
import Footer from '../components/Footer/Footer';
import { setDisplayedArticles } from '../store/general/generalSlice';

jest.mock('react-i18next', () => i18nTranslationMock());

describe('Footer tests', () => {
  it('should display correct number of articles', () => {
    store.dispatch(setDisplayedArticles(12));
    render(<Footer />, { store });
    expect(screen.getByText(/Wyświetlanych artykułów/i)).toHaveTextContent('12');
  });

  it('should have page creators name', () => {
    render(<Footer />);
    expect(screen.getByText('2023 Szymon Kwak')).toBeInTheDocument();
  });
});
