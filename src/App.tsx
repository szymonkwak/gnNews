import { Outlet } from 'react-router-dom';
import { Footer, Header, Sidebar } from './components';

const App = () => {
  return (
    <>
      <Header />
      <div className="lg:flex">
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
        <aside className="hidden lg:block flex-none">
          <Sidebar />
        </aside>
      </div>
      <Footer />
    </>
  );
};

export default App;
