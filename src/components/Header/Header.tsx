import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/react-menu.css';
import { useDispatch, useSelector } from '../../hooks';
import { setDisplayStyle } from '../../store/general/generalSlice';
import { NewsDisplay } from '../../store/general/generalTypes';
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
    <header className="flex p-2 justify-between items-center bg-neutral">
      <div className="flex">
        <HamburgerIcon onClick={() => setDrawerOpen((prev) => !prev)} />
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <DesktopMenu displayStyle={displayStyle} changeDisplayStyle={changeDisplayStyle} />
      <MobileMenu displayStyle={displayStyle} changeDisplayStyle={changeDisplayStyle} />

      <Popup />
    </header>
  );
};

export default Header;
