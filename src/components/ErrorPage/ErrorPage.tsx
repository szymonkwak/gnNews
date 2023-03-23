import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  const { t } = useTranslation();

  return (
    <div className="h-screen bg-cover bg-[url('/img/404.jpg')]">
      <div className="h-2/3 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold">404</h1>
        <p className="text-xl font-bold m-5">{t('Nic tu nie ma')}</p>
        <Link to={'/'}>
          <button className="btn btn-outline">{t('Wróć')}</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
