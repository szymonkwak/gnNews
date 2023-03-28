import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const FetchingError = () => {
  const { t } = useTranslation();

  return (
    <div className="h-screen bg-cover bg-[url('/img/404.jpg')]">
      <div className="h-2/3 flex flex-col justify-center items-center">
        <p className="text-2xl font-bold m-5 text-center">{t('Wystąpił błąd podczas pobierania danych')}</p>
        <Link to={'/'}>
          <button className="btn btn-outline">{t('Wróć')}</button>
        </Link>
      </div>
    </div>
  );
};

export default FetchingError;
