import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ingredients } from '../data/ingredients';

const TYPES = ['all', 'paste', 'sauce', 'vegetable', 'protein', 'grain'];

const TYPE_LABEL = {
  paste: 'Paste',
  sauce: 'Sauce',
  vegetable: 'Vegetable',
  protein: 'Protein',
  grain: 'Grain',
};

const sorted = [...ingredients].sort((a, b) => a.name.localeCompare(b.name));

export default function Glossary() {
  const [activeType, setActiveType] = useState('all');

  const filtered = sorted.filter(
    (ing) => activeType === 'all' || ing.type === activeType
  );

  return (
    <div style={styles.page}>
      <div style={styles.inner}>

        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.heading}>Ingredient Glossary</h1>
          <p style={styles.sub}>
            {filtered.length} ingredient{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Type filter chips */}
        <div style={styles.chips}>
          {TYPES.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              style={{
                ...styles.chip,
                ...(activeType === type ? styles.chipActive : {}),
              }}
            >
              {type === 'all' ? 'All' : TYPE_LABEL[type]}
            </button>
          ))}
        </div>

        {/* Ingredient list */}
        {filtered.length > 0 ? (
          <ul style={styles.list}>
            {filtered.map((ing) => (
              <li key={ing.id}>
                <Link to={`/glossary/${ing.id}`} style={styles.row}>
                  <div style={styles.rowLeft}>
                    <span style={styles.name}>{ing.name}</span>
                    <span style={styles.nameKo}>{ing.nameKo}</span>
                  </div>
                  <div style={styles.rowRight}>
                    <span style={styles.typeBadge}>{TYPE_LABEL[ing.type] ?? ing.type}</span>
                    <span style={styles.arrow}>→</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div style={styles.empty}>
            <p style={styles.emptyText}>No ingredients in this category.</p>
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
    maxWidth: '720px',
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '1rem',
    marginBottom: '1.5rem',
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
  chips: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
    marginBottom: '2rem',
  },
  chip: {
    padding: '0.35rem 1rem',
    borderRadius: '999px',
    border: '1px solid #e8e2db',
    backgroundColor: '#ffffff',
    color: '#7a6f66',
    fontSize: '0.83rem',
    fontWeight: '500',
    cursor: 'pointer',
    fontFamily: 'inherit',
    transition: 'all 0.15s',
  },
  chipActive: {
    backgroundColor: '#c0392b',
    borderColor: '#c0392b',
    color: '#ffffff',
    fontWeight: '600',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 1.25rem',
    backgroundColor: '#ffffff',
    borderRadius: '1rem',
    border: '1px solid #f0ebe4',
    textDecoration: 'none',
    transition: 'box-shadow 0.15s, border-color 0.15s',
  },
  rowLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    flex: 1,
    minWidth: 0,
  },
  name: {
    fontSize: '0.97rem',
    fontWeight: '600',
    color: '#1c1612',
  },
  nameKo: {
    fontSize: '0.85rem',
    color: '#7a6f66',
  },
  rowRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  typeBadge: {
    fontSize: '0.72rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    padding: '0.2rem 0.65rem',
    borderRadius: '999px',
    backgroundColor: '#fdf0ee',
    color: '#c0392b',
    border: '1px solid #f5c6c0',
  },
  arrow: {
    color: '#c0392b',
    fontSize: '0.9rem',
    opacity: 0.5,
  },
  empty: {
    padding: '4rem 2rem',
    textAlign: 'center',
  },
  emptyText: {
    color: '#7a6f66',
    fontSize: '0.97rem',
  },
};
