import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { country } from '../../api/country';

interface CountriesListProps {
  onLiClick: () => void;
}

const CountriesList = (props: CountriesListProps) => {
  const { onLiClick } = props;

  const { t } = useTranslation(['countries', 'translation']);

  return (
    <ul className="menu w-44 bg-base-100 lg:bg-base-200 text-base-content">
      <p className="text-base p-4">{t('Wyświetl arykuły z:', {ns: 'translation'})}</p>

      {Object.entries(country).map((country) => (
        <li key={country[0]}>
          <Link to={`country/${country[0]}`} className="flex justify-between px-4 py-1" onClick={onLiClick}>
            <p>{t(country[1].name)}</p>
            <img src={country[1].flag} alt={`flag-${country[0]}`} className="h-10" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CountriesList;
