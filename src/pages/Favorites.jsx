import { Link } from 'react-router-dom';
import { dishes } from '../data/dishes';
import { useFavorites } from '../hooks/useFavorites';
import DishCard from '../components/DishCard';

export default function Favorites() {
  const { favorites, isFavorite, toggle } = useFavorites();

  const favoritedDishes = dishes.filter((d) => favorites.includes(d.id));

  return (
    <div style={styles.page}>
      <div style={styles.inner}>

        <div style={styles.header}>
          <h1 style={styles.heading}>Favorites</h1>
          {favoritedDishes.length > 0 && (
            <p style={styles.sub}>
              {favoritedDishes.length} saved dish{favoritedDishes.length !== 1 ? 'es' : ''}
            </p>
          )}
        </div>

        {favoritedDishes.length > 0 ? (
          <div style={styles.grid}>
            {favoritedDishes.map((dish) => (
              <DishCard
                key={dish.id}
                dish={dish}
                isFavorite={isFavorite(dish.id)}
                onToggleFavorite={toggle}
              />
            ))}
          </div>
        ) : (
          <div style={styles.empty}>
            <span style={styles.emptyIcon}>♡</span>
            <p style={styles.emptyHeading}>No favorites yet</p>
            <p style={styles.emptyText}>
              Browse dishes and tap the heart to save them here.
            </p>
            <Link to="/dishes" style={styles.browseLink}>
              Browse Dishes
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: 'calc(100vh - 60px)',
    backgroundColor: '#f7f5f2',
    fontFamily: "'Noto Sans KR', system-ui, sans-serif",
    padding: '2rem 1.5rem 5rem',
    overflowX: 'hidden',
  },
  inner: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '1rem',
    marginBottom: '2rem',
    flexWrap: 'wrap',
  },
  heading: {
    fontSize: '1.85rem',
    fontWeight: '800',
    color: '#1c1612',
    margin: 0,
    letterSpacing: '-0.5px',
  },
  sub: {
    fontSize: '0.88rem',
    color: '#7a6f66',
    margin: 0,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '1.5rem',
  },
  empty: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6rem 2rem',
    textAlign: 'center',
    gap: '0.5rem',
  },
  emptyIcon: {
    fontSize: '3rem',
    color: '#c0392b',
    opacity: 0.35,
    lineHeight: 1,
    marginBottom: '0.75rem',
  },
  emptyHeading: {
    fontSize: '1.15rem',
    fontWeight: '700',
    color: '#1c1612',
    margin: 0,
  },
  emptyText: {
    fontSize: '0.93rem',
    color: '#7a6f66',
    margin: '0.25rem 0 1.5rem',
    lineHeight: 1.6,
  },
  browseLink: {
    padding: '0.55rem 1.5rem',
    borderRadius: '999px',
    backgroundColor: '#c0392b',
    color: '#ffffff',
    fontSize: '0.9rem',
    fontWeight: '600',
    textDecoration: 'none',
  },
};
