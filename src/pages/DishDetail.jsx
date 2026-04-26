import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { dishes } from '../data/dishes';
import { ingredients } from '../data/ingredients';
import { useFavorites } from '../hooks/useFavorites';
import { useWindowWidth } from '../hooks/useWindowWidth';
import FavoriteButton from '../components/FavoriteButton';
import SpiceIndicator from '../components/SpiceIndicator';
import IngredientTag from '../components/IngredientTag';

function toTitleCase(str) {
  return str
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export default function DishDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isFavorite, toggle } = useFavorites();
  const width = useWindowWidth();
  const isMobile = width < 640;

  const [imgError, setImgError] = useState(false);
  const dish = dishes.find((d) => d.id === id);

  if (!dish) {
    return (
      <div style={styles.notFound}>
        <p style={styles.notFoundText}>Dish not found.</p>
        <button style={styles.backBtn} onClick={() => navigate('/dishes')}>
          ← Back to Browse
        </button>
      </div>
    );
  }

  const resolvedIngredients = dish.ingredients.map((ingId) => {
    const match = ingredients.find((ing) => ing.id === ingId);
    return match ?? { id: ingId, name: toTitleCase(ingId) };
  });

  return (
    <div style={styles.page}>
      <div style={styles.inner}>

        <button style={styles.backBtn} onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div style={{ ...styles.layout, gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr' }}>

          {/* Image */}
          <div style={isMobile ? {} : styles.imageSticky}>
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
          </div>

          {/* Details */}
          <div style={styles.details}>

            <div style={styles.topRow}>
              <div style={styles.badges}>
                <span style={styles.categoryBadge}>{dish.category}</span>
                {dish.tags.map((tag) => (
                  <span key={tag} style={styles.tag}>{tag}</span>
                ))}
              </div>
              <FavoriteButton
                isFavorite={isFavorite(dish.id)}
                onToggle={() => toggle(dish.id)}
                size="md"
              />
            </div>

            <h1 style={styles.name}>{dish.name}</h1>
            <p style={styles.nameKo}>{dish.nameKo}</p>

            <div style={styles.metaRow}>
              <span style={styles.region}>📍 {dish.region}</span>
              <SpiceIndicator level={dish.spiceLevel} />
            </div>

            <div style={styles.divider} />

            <p style={styles.description}>{dish.description}</p>

            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>Ingredients</h2>
              <div style={styles.ingredientTags}>
                {resolvedIngredients.map((ing) => (
                  <IngredientTag key={ing.id} id={ing.id} name={ing.name} />
                ))}
              </div>
            </section>

            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>Preparation</h2>
              <ol style={styles.stepList}>
                {dish.steps.map((step, i) => (
                  <li key={i} style={styles.step}>
                    <span style={styles.stepNumber}>{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: 'calc(100vh - 60px)',
    backgroundColor: '#f7f5f2',
    fontFamily: "'Noto Sans KR', system-ui, sans-serif",
    padding: '2rem 1.25rem 5rem',
    overflowX: 'hidden',
  },
  inner: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  backBtn: {
    background: 'none',
    border: 'none',
    color: '#7a6f66',
    fontSize: '0.88rem',
    fontWeight: '500',
    cursor: 'pointer',
    padding: '0.25rem 0',
    marginBottom: '1.75rem',
    fontFamily: 'inherit',
    display: 'inline-block',
  },
  layout: {
    display: 'grid',
    gap: '2.5rem',
    alignItems: 'start',
  },
  imageSticky: {
    position: 'sticky',
    top: '80px',
  },
  image: {
    width: '100%',
    aspectRatio: '4 / 3',
    objectFit: 'cover',
    borderRadius: '1.5rem',
    display: 'block',
  },
  imagePlaceholder: {
    width: '100%',
    aspectRatio: '4 / 3',
    backgroundColor: '#fdf0ee',
    borderRadius: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
  },
  imagePlaceholderEmoji: {
    fontSize: '4rem',
    opacity: 0.45,
  },
  imagePlaceholderText: {
    fontSize: '1.5rem',
    color: '#c0392b',
    opacity: 0.35,
    fontWeight: '700',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.1rem',
  },
  topRow: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: '0.75rem',
  },
  badges: {
    display: 'flex',
    gap: '0.4rem',
    flexWrap: 'wrap',
  },
  categoryBadge: {
    fontSize: '0.72rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.07em',
    padding: '0.25rem 0.75rem',
    borderRadius: '999px',
    backgroundColor: '#c0392b',
    color: '#ffffff',
  },
  tag: {
    fontSize: '0.72rem',
    fontWeight: '500',
    padding: '0.25rem 0.75rem',
    borderRadius: '999px',
    backgroundColor: '#f0ebe4',
    color: '#7a6f66',
  },
  name: {
    fontSize: '2.2rem',
    fontWeight: '800',
    color: '#1c1612',
    margin: '0 0 0.2rem',
    letterSpacing: '-0.5px',
    lineHeight: 1.15,
  },
  nameKo: {
    fontSize: '1.1rem',
    color: '#7a6f66',
    margin: '0 0 1rem',
    fontWeight: '400',
  },
  metaRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
    marginBottom: '1.25rem',
  },
  region: {
    fontSize: '0.85rem',
    color: '#7a6f66',
  },
  divider: {
    height: '1px',
    backgroundColor: '#f0ebe4',
    margin: '0.25rem 0 1.25rem',
  },
  description: {
    fontSize: '0.97rem',
    color: '#4a3f38',
    lineHeight: '1.75',
    margin: '0 0 1.75rem',
  },
  section: {
    marginBottom: '1.75rem',
  },
  sectionTitle: {
    fontSize: '0.78rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: '#7a6f66',
    margin: '0 0 0.75rem',
  },
  ingredientTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  stepList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  step: {
    display: 'flex',
    gap: '0.85rem',
    alignItems: 'flex-start',
    fontSize: '0.95rem',
    color: '#4a3f38',
    lineHeight: '1.6',
  },
  stepNumber: {
    minWidth: '1.6rem',
    height: '1.6rem',
    borderRadius: '50%',
    backgroundColor: '#fdf0ee',
    border: '1px solid #f5c6c0',
    color: '#c0392b',
    fontSize: '0.75rem',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginTop: '0.1rem',
  },
  notFound: {
    minHeight: 'calc(100vh - 60px)',
    backgroundColor: '#f7f5f2',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Noto Sans KR', system-ui, sans-serif",
    gap: '1rem',
  },
  notFoundText: {
    fontSize: '1.1rem',
    color: '#7a6f66',
  },
};
