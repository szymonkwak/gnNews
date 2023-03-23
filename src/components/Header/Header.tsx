import { useDispatch, useSelector } from '../../hooks';
import { setDisplayStyle } from '../../store/general/generalSlice';
import { NewsDisplay } from '../../store/general/generalTypes';
import LanguageDropdown from './components/LanguageDropdown';
import Logo from './components/Logo';
import Popup from './components/Popup';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Header = () => {
  const displayStyle = useSelector((state) => state.general.newsDisplayStyle);

  const dispatch = useDispatch();

  const changeDisplayStyle = (displayStyle: NewsDisplay) => {
    dispatch(setDisplayStyle(displayStyle));
  };

  return (
    <div className="navbar bg-neutral">
      <div className="navbar-start">
        <MobileMenu displayStyle={displayStyle} changeDisplayStyle={changeDisplayStyle} />
        <a href="/">
          <Logo />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <DesktopMenu displayStyle={displayStyle} changeDisplayStyle={changeDisplayStyle} />
      </div>
      <div className="navbar-end">
        <label htmlFor="fun-modal" className="btn hidden lg:flex">
          Popup
        </label>
        <LanguageDropdown />
      </div>

      <Popup />
    </div>
  );
};

export default Header;
