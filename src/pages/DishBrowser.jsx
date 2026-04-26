import { useState } from 'react';
import { dishes } from '../data/dishes';
import DishCard from '../components/DishCard';
import { useFavorites } from '../hooks/useFavorites';

const CATEGORIES = ['all', 'rice', 'soup', 'noodle', 'meat', 'snack'];

export default function DishBrowser() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const { isFavorite, toggle } = useFavorites();

  const filtered = dishes.filter((dish) => {
    const matchesCategory =
      activeCategory === 'all' || dish.category === activeCategory;
    const matchesSearch =
      dish.name.toLowerCase().includes(search.toLowerCase()) ||
      dish.nameKo.includes(search);
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={styles.page}>
      <div style={styles.inner}>

        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.heading}>Korean Dishes</h1>
          <p style={styles.sub}>{filtered.length} dish{filtered.length !== 1 ? 'es' : ''} found</p>
        </div>

        {/* Search */}
        <input
          type="search"
          placeholder="Search dishes…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.searchInput}
        />

        {/* Category chips */}
        <div style={styles.chips}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                ...styles.chip,
                ...(activeCategory === cat ? styles.chipActive : {}),
              }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div style={styles.grid}>
            {filtered.map((dish) => (
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
            <p style={styles.emptyText}>No dishes match your search.</p>
            <button
              style={styles.clearBtn}
              onClick={() => { setSearch(''); setActiveCategory('all'); }}
            >
              Clear filters
            </button>
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
    padding: '2rem 1.5rem 4rem',
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
  searchInput: {
    width: '100%',
    padding: '0.65rem 1rem',
    fontSize: '0.95rem',
    border: '1px solid #e8e2db',
    borderRadius: '999px',
    outline: 'none',
    backgroundColor: '#ffffff',
    color: '#1c1612',
    boxSizing: 'border-box',
    marginBottom: '1rem',
    fontFamily: 'inherit',
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '1.5rem',
  },
  empty: {
    textAlign: 'center',
    padding: '4rem 2rem',
  },
  emptyText: {
    color: '#7a6f66',
    fontSize: '1rem',
    marginBottom: '1rem',
  },
  clearBtn: {
    padding: '0.45rem 1.25rem',
    borderRadius: '999px',
    border: '1px solid #c0392b',
    backgroundColor: 'transparent',
    color: '#c0392b',
    fontSize: '0.88rem',
    fontWeight: '600',
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
};
