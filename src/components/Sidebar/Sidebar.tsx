import { useTranslation } from 'react-i18next';
import CountriesList from './CountriesList';

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <>
      <p className="text-lg text-center my-2">{t('Wyświetl arykuły z:')}</p>
      <CountriesList />
    </>
  );
};

export default Sidebar;
