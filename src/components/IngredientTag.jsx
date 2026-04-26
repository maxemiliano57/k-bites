import { Link } from 'react-router-dom';

export default function IngredientTag({ id, name }) {
  return (
    <Link to={`/glossary/${id}`} style={styles.tag}>
      {name}
    </Link>
  );
}

const styles = {
  tag: {
    display: 'inline-block',
    padding: '0.25rem 0.75rem',
    borderRadius: '999px',
    fontSize: '0.78rem',
    fontWeight: '500',
    backgroundColor: '#fdf0ee',
    color: '#c0392b',
    textDecoration: 'none',
    border: '1px solid #f5c6c0',
    transition: 'background 0.15s',
  },
};
