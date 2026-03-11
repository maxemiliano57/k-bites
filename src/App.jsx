import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DishBrowser from './pages/DishBrowser';
import DishDetail from './pages/DishDetail';
import Favorites from './pages/Favorites';
import Glossary from './pages/Glossary';
import GlossaryDetail from './pages/GlossaryDetail';
import RandomDish from './pages/RandomDish';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dishes" element={<DishBrowser />} />
        <Route path="/dishes/:id" element={<DishDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/glossary/:id" element={<GlossaryDetail />} />
        <Route path="/random" element={<RandomDish />} />
      </Routes>
    </BrowserRouter>
  );
}
