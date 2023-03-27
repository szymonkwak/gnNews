import { useTranslation } from 'react-i18next';
import { Menu } from '@szhsin/react-menu';
import LanguagesList from './LanguagesList';

const LanguageDropdown = () => {
  const { t } = useTranslation();

  return (
    <Menu menuButton={<button className="btn btn-secondary">{t('Język')}</button>}>
      <LanguagesList />
    </Menu>
  );
};

export default LanguageDropdown;
