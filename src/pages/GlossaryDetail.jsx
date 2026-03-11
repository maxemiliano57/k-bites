import { useParams, useNavigate, Link } from 'react-router-dom';
import { ingredients } from '../data/ingredients';
import { dishes } from '../data/dishes';
import { useWindowWidth } from '../hooks/useWindowWidth';

const TYPE_LABEL = {
  paste: 'Paste',
  sauce: 'Sauce',
  vegetable: 'Vegetable',
  protein: 'Protein',
  grain: 'Grain',
};

export default function GlossaryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const width = useWindowWidth();
  const isMobile = width < 640;

  const ingredient = ingredients.find((ing) => ing.id === id);

  if (!ingredient) {
    return (
      <div style={styles.notFound}>
        <p style={styles.notFoundText}>Ingredient not found.</p>
        <button style={styles.backBtn} onClick={() => navigate('/glossary')}>
          ← Back to Glossary
        </button>
      </div>
    );
  }

  const usedInDishes = dishes.filter((d) => d.ingredients.includes(id));

  return (
    <div style={styles.page}>
      <div style={styles.inner}>

        <button style={styles.backBtn} onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div style={{
          ...styles.card,
          padding: isMobile ? '1.5rem 1.25rem' : '2rem 2.25rem',
        }}>

          <div style={styles.cardHeader}>
            <div style={styles.typeBadge}>
              {TYPE_LABEL[ingredient.type] ?? ingredient.type}
            </div>
            <h1 style={styles.name}>{ingredient.name}</h1>
            <p style={styles.nameKo}>{ingredient.nameKo}</p>
          </div>

          <div style={styles.divider} />

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>About</h2>
            <p style={styles.body}>{ingredient.description}</p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Substitute</h2>
            <div style={styles.substituteBox}>
              <span style={styles.substituteIcon}>⇄</span>
              <p style={styles.substituteText}>{ingredient.substitute}</p>
            </div>
          </section>

          <div style={styles.divider} />

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Used In</h2>
            {usedInDishes.length > 0 ? (
              <div style={styles.dishList}>
                {usedInDishes.map((dish) => (
                  <Link key={dish.id} to={`/dishes/${dish.id}`} style={styles.dishRow}>
                    <div style={styles.dishRowLeft}>
                      <span style={styles.dishName}>{dish.name}</span>
                      <span style={styles.dishNameKo}>{dish.nameKo}</span>
                    </div>
                    <div style={styles.dishRowRight}>
                      <span style={styles.dishCategory}>{dish.category}</span>
                      <span style={styles.arrow}>→</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p style={styles.nodishes}>Not linked to any dishes yet.</p>
            )}
          </section>

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
    maxWidth: '680px',
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
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '1.5rem',
    border: '1px solid #f0ebe4',
    boxShadow: '0 1px 12px rgba(0,0,0,0.05)',
  },
  cardHeader: {
    marginBottom: '1.5rem',
  },
  typeBadge: {
    display: 'inline-block',
    fontSize: '0.72rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.07em',
    padding: '0.25rem 0.75rem',
    borderRadius: '999px',
    backgroundColor: '#fdf0ee',
    color: '#c0392b',
    border: '1px solid #f5c6c0',
    marginBottom: '0.85rem',
  },
  name: {
    fontSize: '2rem',
    fontWeight: '800',
    color: '#1c1612',
    margin: '0 0 0.2rem',
    letterSpacing: '-0.5px',
    lineHeight: 1.15,
  },
  nameKo: {
    fontSize: '1.05rem',
    color: '#7a6f66',
    margin: 0,
    fontWeight: '400',
  },
  divider: {
    height: '1px',
    backgroundColor: '#f0ebe4',
    margin: '1.5rem 0',
  },
  section: {
    marginBottom: '1.5rem',
  },
  sectionTitle: {
    fontSize: '0.75rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: '#7a6f66',
    margin: '0 0 0.65rem',
  },
  body: {
    fontSize: '0.96rem',
    color: '#4a3f38',
    lineHeight: '1.75',
    margin: 0,
  },
  substituteBox: {
    display: 'flex',
    gap: '0.75rem',
    alignItems: 'flex-start',
    backgroundColor: '#fdf0ee',
    border: '1px solid #f5c6c0',
    borderRadius: '0.75rem',
    padding: '0.85rem 1rem',
  },
  substituteIcon: {
    fontSize: '1rem',
    color: '#c0392b',
    flexShrink: 0,
    marginTop: '0.1rem',
  },
  substituteText: {
    fontSize: '0.91rem',
    color: '#4a3f38',
    lineHeight: '1.65',
    margin: 0,
  },
  dishList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  dishRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.85rem 1rem',
    backgroundColor: '#f7f5f2',
    borderRadius: '0.75rem',
    border: '1px solid #f0ebe4',
    textDecoration: 'none',
  },
  dishRowLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.65rem',
    flexWrap: 'wrap',
  },
  dishName: {
    fontSize: '0.95rem',
    fontWeight: '600',
    color: '#1c1612',
  },
  dishNameKo: {
    fontSize: '0.82rem',
    color: '#7a6f66',
  },
  dishRowRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.65rem',
    flexShrink: 0,
  },
  dishCategory: {
    fontSize: '0.7rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    color: '#7a6f66',
  },
  arrow: {
    color: '#c0392b',
    fontSize: '0.9rem',
    opacity: 0.5,
  },
  nodishes: {
    fontSize: '0.91rem',
    color: '#7a6f66',
    fontStyle: 'italic',
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
