import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { country } from '../../api/country';

const CountriesList = () => {
  const { t } = useTranslation('countries');

  return (
    <ul className="menu w-44 text-base-content">
      {Object.entries(country).map((country) => (
        <li key={country[0]}>
          <Link to={`country/${country[0]}`} className="flex justify-between px-4 py-1">
            <p>{t(country[1].name)}</p>
            <img src={country[1].flag} alt={`flag-${country[0]}`} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CountriesList;
