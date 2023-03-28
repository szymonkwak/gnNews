import { Dispatch, SetStateAction } from 'react';
import CountriesList from './CountriesList';

interface SidebarProps {
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = (props: SidebarProps) => {
  const { setDrawerOpen } = props;

  return (
    <aside className="drawer-side !max-h-full">
      <label htmlFor="drawer-side" className="drawer-overlay"></label>
      <CountriesList onLiClick={() => setDrawerOpen(false)} />
    </aside>
  );
};

export default Sidebar;
