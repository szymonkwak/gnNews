import { useTranslation } from 'react-i18next';
import { Menu, MenuItem, SubMenu } from '@szhsin/react-menu';
import { NewsDisplay } from '../../store/general/generalTypes';
import LanguagesList from './components/LanguagesList';
import SettingsIcon from './components/SettingsIcon';

interface MobileMenuProps {
  displayStyle: NewsDisplay;
  changeDisplayStyle: (displayStyle: NewsDisplay) => void;
}

const MobileMenu = (props: MobileMenuProps) => {
  const { displayStyle, changeDisplayStyle } = props;

  const { t } = useTranslation();

  return (
    <Menu
      menuButton={
        <button className="lg:hidden m-2 focus:rotate-45 transition-transform">
          <SettingsIcon />
        </button>
      }
      offsetY={20}
    >
      <MenuItem>
        {displayStyle === NewsDisplay.grid ? (
          <button onClick={() => changeDisplayStyle(NewsDisplay.list)}>{t('Wyświetlanie: Lista')}</button>
        ) : (
          <button onClick={() => changeDisplayStyle(NewsDisplay.grid)}>{t('Wyświetlanie: Kafelki')}</button>
        )}
      </MenuItem>
      <MenuItem>
        <label className="hover:cursor-pointer" htmlFor="fun-modal">
          Popup
        </label>
      </MenuItem>
      <SubMenu label={t('Język')}>
        <LanguagesList />
      </SubMenu>
    </Menu>
  );
};

export default MobileMenu;
