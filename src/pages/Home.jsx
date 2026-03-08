export default function Home() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.badge}>한국 음식</div>
        <h1 style={styles.title}>K-Bites</h1>
        <div style={styles.divider} />
        <p style={styles.subtitle}>
          Discover iconic Korean dishes, explore ingredients,
          <br />
          and save your favorites.
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#f7f5f2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Noto Sans KR', system-ui, sans-serif",
    padding: '2rem',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '2rem',
    padding: '3.5rem 4rem',
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
    fontSize: '3.2rem',
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
  },
};
