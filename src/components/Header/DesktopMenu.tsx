import { useTranslation } from 'react-i18next';
import { NewsDisplay } from '../../store/general/generalTypes';
import LanguageDropdown from './components/LanguageDropdown';

interface DesktopMenuProps {
  displayStyle: NewsDisplay;
  changeDisplayStyle: (displayStyle: NewsDisplay) => void;
}

const DesktopMenu = (props: DesktopMenuProps) => {
  const { displayStyle, changeDisplayStyle } = props;

  const { t } = useTranslation();

  return (
    <>
      <label
        className={`hidden lg:inline-grid swap swap-flip ${displayStyle === NewsDisplay.grid ? 'swap-active' : ''}`}
      >
        <button
          onClick={() => changeDisplayStyle(NewsDisplay.grid)}
          className="swap-off btn btn-secondary btn-outline no-animation"
        >
          {t('Wyświetl kafelki')}
        </button>
        <button
          onClick={() => changeDisplayStyle(NewsDisplay.list)}
          className="swap-on btn btn-secondary btn-outline no-animation"
        >
          {t('Wyświetl listę')}
        </button>
      </label>

      <div className="hidden lg:flex">
        <label htmlFor="fun-modal" className="btn btn-secondary">
          Popup
        </label>
        <LanguageDropdown />
      </div>
    </>
  );
};

export default DesktopMenu;
