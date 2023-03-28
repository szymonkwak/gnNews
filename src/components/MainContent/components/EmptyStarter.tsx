import { useTranslation } from 'react-i18next';
import news from '../../../assets/news.jpg';
import arrow from '../../../assets/arrow.svg';
import arrowSm from '../../../assets/arrow-sm.svg';

const EmptyStarter = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-max-full flex flex-col items-center">
      <img src={arrow} alt="arrow" className="hidden lg:block w-screen" />
      <img src={arrowSm} alt="arrow" className="lg:hidden w-screen" />
      <h1 className="text-xl lg:text-2xl text-center">{t('Wybierz kraj z menu, aby wyświetlić artykuły')}</h1>
      <img src={news} alt="news" className="max-h-96" />
    </div>
  );
};

export default EmptyStarter;
