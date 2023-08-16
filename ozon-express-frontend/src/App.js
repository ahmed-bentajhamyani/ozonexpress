import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import Market from './pages/ozon_market/Market';
import Admin from './pages/admin/Admin';
import { useDarkMode } from 'context/DarkModeContext';

function App() {

  const { darkMode } = useDarkMode();

  return (
    <div id='home' className={`font-poppins ${darkMode && 'dark bg-black'}`} data-simplebar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blogs/*" element={<Blog />} />
        <Route path="/market/*" element={<Market />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
