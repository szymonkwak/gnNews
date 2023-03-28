import { useTranslation } from 'react-i18next';

interface FetchBtnProps {
  handleFetch: () => void;
  loading: boolean;
}

const FetchBtn = (props: FetchBtnProps) => {
  const { handleFetch, loading } = props;

  const { t } = useTranslation();

  return (
    <div className="m-4 flex justify-center">
      {loading ? (
        <button className="btn loading">{t('Pobieranie')}</button>
      ) : (
        <button onClick={handleFetch} className="btn btn-primary">
          {t('Pobierz więcej')}
        </button>
      )}
    </div>
  );
};

export default FetchBtn;
