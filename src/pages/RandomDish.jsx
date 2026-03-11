import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { dishes } from '../data/dishes';

const STORAGE_KEY = 'kbites_last_random';

export default function RandomDish() {
  const navigate = useNavigate();

  useEffect(() => {
    const lastId = localStorage.getItem(STORAGE_KEY);
    const pool = dishes.filter((d) => d.id !== lastId);
    const source = pool.length > 0 ? pool : dishes;
    const pick = source[Math.floor(Math.random() * source.length)];
    localStorage.setItem(STORAGE_KEY, pick.id);
    navigate(`/dishes/${pick.id}`, { replace: true });
  }, [navigate]);

  return null;
}
