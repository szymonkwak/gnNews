import { useTranslation } from 'react-i18next';
import { MenuItem } from '@szhsin/react-menu';
import { useDispatch } from '../../../hooks';
import { setLanguage } from '../../../store/general/generalSlice';
import { Languages } from '../../../store/general/generalTypes';

const LanguagesList = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const handleLanguageChange = (lng: Languages) => {
    i18n.changeLanguage(lng);
    dispatch(setLanguage(lng));
  };

  return (
    <>
      <MenuItem onClick={() => handleLanguageChange(Languages.PL)}>
        <img src="/img/flags/pl.svg" alt="flag" className="h-5 w-5 mr-2" />
        PL
      </MenuItem>
      <MenuItem onClick={() => handleLanguageChange(Languages.ENG)}>
        <img src="/img/flags/gb.svg" alt="flag" className="h-5 w-5 mr-2" />
        EN
      </MenuItem>
    </>
  );
};

export default LanguagesList;
