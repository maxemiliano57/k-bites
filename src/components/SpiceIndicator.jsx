const MAX = 3;
const CHILI = '🌶';

export default function SpiceIndicator({ level = 0 }) {
  if (level === 0) {
    return <span style={styles.mild}>Mild</span>;
  }
  return (
    <span style={styles.wrap} title={`Spice level ${level} of ${MAX}`}>
      {Array.from({ length: MAX }, (_, i) => (
        <span key={i} style={{ opacity: i < level ? 1 : 0.2 }}>
          {CHILI}
        </span>
      ))}
    </span>
  );
}

const styles = {
  wrap: {
    display: 'inline-flex',
    gap: '2px',
    fontSize: '0.85rem',
  },
  mild: {
    fontSize: '0.78rem',
    color: '#7a6f66',
    fontStyle: 'italic',
  },
};
