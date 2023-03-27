import { fireEvent, screen } from '@testing-library/react';
import { i18nTranslationMock, render } from './config';
import { store } from '../store';
import Header from '../components/Header/Header';
import { setDisplayStyle } from '../store/general/generalSlice';
import { NewsDisplay } from '../store/general/generalTypes';

jest.mock('react-i18next', () => i18nTranslationMock());

// Fire click event on settings button
const clickSettingsButton = () => {
  const buttons = screen.getAllByRole('button');
  const settingsButtnon = buttons.find((btn) => btn.classList.contains('focus:rotate-45'));
  if (settingsButtnon) fireEvent.click(settingsButtnon);
};

describe('Header tests', () => {
  it('should display button to change articles display to grid', () => {
    render(<Header setDrawerOpen={jest.fn} />, { store });
    clickSettingsButton();

    expect(
      screen.getAllByRole('menuitem').find((el) => el.firstChild?.textContent?.includes('Wyświetlanie: Kafelki'))
    ).toBeInTheDocument();
  });

  it('should display button to change articles display to list', () => {
    store.dispatch(setDisplayStyle(NewsDisplay.grid));
    render(<Header setDrawerOpen={jest.fn} />, { store });
    clickSettingsButton();

    expect(
      screen.getAllByRole('menuitem').find((el) => el.firstChild?.textContent?.includes('Wyświetlanie: Lista'))
    ).toBeInTheDocument();
  });
});
