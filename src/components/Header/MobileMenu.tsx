import { useTranslation } from 'react-i18next';
import { NewsDisplay } from '../../store/general/generalTypes';

interface MobileMenuProps {
  displayStyle: NewsDisplay;
  changeDisplayStyle: (displayStyle: NewsDisplay) => void;
}

const MobileMenu = (props: MobileMenuProps) => {
  const { displayStyle, changeDisplayStyle } = props;

  const { t } = useTranslation();

  return (
    <div className="dropdown lg:hidden">
      <label tabIndex={0} className="btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </label>

      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          {displayStyle === NewsDisplay.grid ? (
            <a onClick={() => changeDisplayStyle(NewsDisplay.list)}>{t('Wyświetlanie: Lista')}</a>
          ) : (
            <a onClick={() => changeDisplayStyle(NewsDisplay.grid)}>{t('Wyświetlanie: Kafelki')}</a>
          )}
        </li>
        <li>
          <label htmlFor="fun-modal">Popup</label>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
