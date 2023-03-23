import { useTranslation } from 'react-i18next';
import { useDispatch } from '../../../hooks';
import { setLanguage } from '../../../store/general/generalSlice';
import { Languages } from '../../../store/general/generalTypes';

const LanguageDropdown = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const handleLanguageChange = (lng: Languages) => {
    i18n.changeLanguage(lng);
    dispatch(setLanguage(lng));
  };

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <label tabIndex={0} className="btn">
        {t('Język')}
      </label>
      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-20">
        <li>
          <button onClick={() => handleLanguageChange(Languages.PL)}>PL</button>
        </li>
        <li>
          <button onClick={() => handleLanguageChange(Languages.ENG)}>EN</button>
        </li>
      </ul>
    </div>
  );
};

export default LanguageDropdown;
