import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Sidebar } from './components';

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Header setDrawerOpen={setDrawerOpen} />

      <div className="drawer drawer-mobile">
        <input
          checked={drawerOpen}
          onChange={() => setDrawerOpen((prev) => !prev)}
          id="drawer-side"
          type="checkbox"
          className="drawer-toggle"
        />
        <main className="drawer-content" onClick={() => setDrawerOpen(false)}>
          <Outlet />
        </main>
        <Sidebar setDrawerOpen={setDrawerOpen} />
      </div>

      <Footer />
    </>
  );
};

export default App;
