import { Link } from 'react-router-dom';
import { useWindowWidth } from '../hooks/useWindowWidth';

export default function Home() {
  const width = useWindowWidth();
  const isMobile = width < 640;

  return (
    <div style={styles.page}>
      <div style={{
        ...styles.card,
        padding: isMobile ? '2.5rem 1.5rem' : '3.5rem 4rem',
      }}>
        <div style={styles.badge}>한국 음식</div>
        <h1 style={{
          ...styles.title,
          fontSize: isMobile ? '2.4rem' : '3.2rem',
        }}>
          K-Bites
        </h1>
        <div style={styles.divider} />
        <p style={styles.subtitle}>
          Discover iconic Korean dishes, explore ingredients,
          {isMobile ? ' ' : <br />}
          and save your favorites.
        </p>
        <Link to="/dishes" style={styles.cta}>Browse Dishes</Link>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: 'calc(100vh - 60px)',
    backgroundImage: 'url(/images/landing-page.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Noto Sans KR', system-ui, sans-serif",
    padding: '2rem 1.25rem',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '2rem',
    maxWidth: '520px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 2px 32px rgba(180, 80, 60, 0.08), 0 1px 4px rgba(0,0,0,0.04)',
    border: '1px solid #f0ebe4',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: '#fdf0ee',
    color: '#c0392b',
    fontSize: '0.78rem',
    fontWeight: '600',
    letterSpacing: '0.08em',
    padding: '0.35rem 1rem',
    borderRadius: '999px',
    marginBottom: '1.5rem',
    border: '1px solid #f5c6c0',
  },
  title: {
    fontWeight: '800',
    color: '#1c1612',
    letterSpacing: '-1px',
    lineHeight: 1.1,
    marginBottom: '1.25rem',
  },
  divider: {
    width: '2.5rem',
    height: '3px',
    backgroundColor: '#c0392b',
    borderRadius: '999px',
    margin: '0 auto 1.5rem',
    opacity: 0.7,
  },
  subtitle: {
    fontSize: '1.05rem',
    color: '#7a6f66',
    lineHeight: '1.8',
    fontWeight: '400',
    marginBottom: '2rem',
  },
  cta: {
    display: 'inline-block',
    padding: '0.6rem 1.75rem',
    backgroundColor: '#c0392b',
    color: '#ffffff',
    borderRadius: '999px',
    fontSize: '0.95rem',
    fontWeight: '600',
    textDecoration: 'none',
  },
};
