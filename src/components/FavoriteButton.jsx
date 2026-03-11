export default function FavoriteButton({ isFavorite = false, onToggle, size = 'md' }) {
  const iconSize = size === 'sm' ? '1rem' : '1.3rem';

  return (
    <button
      onClick={onToggle}
      title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      style={{ ...styles.btn, fontSize: iconSize }}
      aria-pressed={isFavorite}
    >
      {isFavorite ? '♥' : '♡'}
    </button>
  );
}

const styles = {
  btn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#c0392b',
    padding: '0.25rem',
    lineHeight: 1,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.15s',
  },
};
