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
      {displayStyle === NewsDisplay.grid ? (
        <MenuItem onClick={() => changeDisplayStyle(NewsDisplay.list)}>{t('Wyświetl listę')}</MenuItem>
      ) : (
        <MenuItem onClick={() => changeDisplayStyle(NewsDisplay.grid)}>{t('Wyświetl kafelki')}</MenuItem>
      )}
      <MenuItem className='!p-0'>
        <label className="w-full h-full px-4 py-1.5 hover:cursor-pointer" htmlFor="fun-modal">
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
