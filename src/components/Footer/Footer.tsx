import { useTranslation } from 'react-i18next';
import { useSelector } from '../../hooks';
import Personals from './components/Personals';
import Timer from './components/Timer';

const Footer = () => {
  const articlesNo = useSelector((state) => state.general.displayedArticles);

  const { t } = useTranslation();

  return (
    <footer className="mt-auto flex flex-col gap-2 justify-between items-center p-4 bg-neutral text-neutral-content sm:flex-row">
      <Timer />
      <div>
        {t('Wyświetlanych artykułów: ')}
        {articlesNo}
      </div>
      <Personals />
    </footer>
  );
};

export default Footer;
