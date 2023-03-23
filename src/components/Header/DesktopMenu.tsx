import { useTranslation } from 'react-i18next';
import { NewsDisplay } from '../../store/general/generalTypes';

interface DesktopMenuProps {
  displayStyle: NewsDisplay;
  changeDisplayStyle: (displayStyle: NewsDisplay) => void;
}

const DesktopMenu = (props: DesktopMenuProps) => {
  const { displayStyle, changeDisplayStyle } = props;

  const { t } = useTranslation();

  return (
    <label className={`swap swap-flip ${displayStyle === NewsDisplay.grid ? 'swap-active' : ''}`}>
      <button onClick={() => changeDisplayStyle(NewsDisplay.grid)} className="swap-off btn btn-primary no-animation">
        {t('Wyświetlanie: Lista')}
      </button>
      <button onClick={() => changeDisplayStyle(NewsDisplay.list)} className="swap-on btn btn-primary no-animation">
        {t('Wyświetlanie: Kafelki')}
      </button>
    </label>
  );
};

export default DesktopMenu;
