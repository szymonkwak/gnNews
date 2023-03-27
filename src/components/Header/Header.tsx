import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/react-menu.css';
import { useDispatch, useSelector } from '../../hooks';
import { setDisplayStyle } from '../../store/general/generalSlice';
import { NewsDisplay } from '../../store/general/generalTypes';
import LanguageDropdown from './components/LanguageDropdown';
import Logo from './components/Logo';
import Popup from './components/Popup';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import HamburgerIcon from './components/HamburgerIcon';

interface HeaderProps {
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

const Header = (props: HeaderProps) => {
  const { setDrawerOpen } = props;
  const displayStyle = useSelector((state) => state.general.newsDisplayStyle);

  const dispatch = useDispatch();

  const changeDisplayStyle = (displayStyle: NewsDisplay) => {
    dispatch(setDisplayStyle(displayStyle));
  };

  return (
    <header className="navbar bg-neutral">
      <div className="navbar-start">
        <HamburgerIcon onClick={() => setDrawerOpen((prev) => !prev)} />
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <DesktopMenu displayStyle={displayStyle} changeDisplayStyle={changeDisplayStyle} />
      </div>

      <div className="navbar-end">
        <MobileMenu displayStyle={displayStyle} changeDisplayStyle={changeDisplayStyle} />
        <div className="hidden lg:flex">
          <label htmlFor="fun-modal" className="btn btn-secondary">
            Popup
          </label>
          <LanguageDropdown />
        </div>
      </div>

      <Popup />
    </header>
  );
};

export default Header;
