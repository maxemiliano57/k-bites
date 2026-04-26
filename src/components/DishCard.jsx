import { useState } from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
import SpiceIndicator from './SpiceIndicator';

export default function DishCard({ dish, isFavorite = false, onToggleFavorite }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div style={styles.card}>
      <Link to={`/dishes/${dish.id}`} style={styles.imageLink}>
        {imgError ? (
          <div style={styles.imagePlaceholder}>
            <span style={styles.imagePlaceholderEmoji}>🍽</span>
            <span style={styles.imagePlaceholderText}>{dish.nameKo}</span>
          </div>
        ) : (
          <img
            src={dish.imageUrl}
            alt={dish.name}
            style={styles.image}
            onError={() => setImgError(true)}
          />
        )}
      </Link>

      <div style={styles.body}>
        <div style={styles.topRow}>
          <span style={styles.category}>{dish.category}</span>
          <FavoriteButton
            isFavorite={isFavorite}
            onToggle={() => onToggleFavorite?.(dish.id)}
            size="sm"
          />
        </div>

        <Link to={`/dishes/${dish.id}`} style={styles.nameLink}>
          <h3 style={styles.name}>{dish.name}</h3>
        </Link>

        <div style={styles.bottomRow}>
          <SpiceIndicator level={dish.spiceLevel} />
          <span style={styles.region}>{dish.region}</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '1.25rem',
    overflow: 'hidden',
    border: '1px solid #f0ebe4',
    boxShadow: '0 1px 8px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: "'Noto Sans KR', system-ui, sans-serif",
    transition: 'box-shadow 0.2s',
  },
  imageLink: {
    display: 'block',
    textDecoration: 'none',
  },
  image: {
    width: '100%',
    aspectRatio: '4 / 3',
    objectFit: 'cover',
    display: 'block',
  },
  imagePlaceholder: {
    width: '100%',
    aspectRatio: '4 / 3',
    backgroundColor: '#fdf0ee',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.4rem',
  },
  imagePlaceholderEmoji: {
    fontSize: '2.5rem',
    opacity: 0.5,
  },
  imagePlaceholderText: {
    fontSize: '1rem',
    color: '#c0392b',
    opacity: 0.45,
    fontWeight: '700',
  },
  body: {
    padding: '1rem 1.1rem 1.1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  topRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  category: {
    fontSize: '0.72rem',
    fontWeight: '600',
    color: '#7a6f66',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
  },
  nameLink: {
    textDecoration: 'none',
  },
  name: {
    margin: 0,
    fontSize: '1.05rem',
    fontWeight: '700',
    color: '#1c1612',
    lineHeight: 1.3,
  },
  bottomRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '0.2rem',
  },
  region: {
    fontSize: '0.75rem',
    color: '#7a6f66',
  },
};
