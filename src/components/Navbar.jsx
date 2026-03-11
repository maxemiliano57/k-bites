import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useWindowWidth } from '../hooks/useWindowWidth';

const links = [
  { to: '/dishes', label: 'Browse' },
  { to: '/favorites', label: 'Favorites' },
  { to: '/glossary', label: 'Glossary' },
  { to: '/random', label: 'Surprise Me' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const width = useWindowWidth();
  const isMobile = width < 640;

  const linkStyle = ({ isActive }) => ({
    ...styles.link,
    ...(isActive ? styles.linkActive : {}),
    ...(isMobile ? styles.linkMobile : {}),
  });

  return (
    <nav style={styles.nav}>
      <NavLink to="/" style={styles.brand} onClick={() => setOpen(false)}>
        K-Bites
      </NavLink>

      {isMobile ? (
        <>
          <button
            style={styles.hamburger}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? '✕' : '☰'}
          </button>

          {open && (
            <div style={styles.dropdown}>
              {links.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  style={linkStyle}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          )}
        </>
      ) : (
        <div style={styles.links}>
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} style={linkStyle}>
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '0 1.25rem',
    height: '60px',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #f0ebe4',
    boxShadow: '0 1px 8px rgba(0,0,0,0.05)',
    fontFamily: "'Noto Sans KR', system-ui, sans-serif",
  },
  brand: {
    fontSize: '1.25rem',
    fontWeight: '800',
    color: '#c0392b',
    textDecoration: 'none',
    letterSpacing: '-0.5px',
  },
  links: {
    display: 'flex',
    gap: '0.25rem',
  },
  link: {
    padding: '0.4rem 0.85rem',
    borderRadius: '999px',
    fontSize: '0.88rem',
    fontWeight: '500',
    color: '#7a6f66',
    textDecoration: 'none',
    transition: 'background 0.15s, color 0.15s',
  },
  linkActive: {
    backgroundColor: '#fdf0ee',
    color: '#c0392b',
    fontWeight: '600',
  },
  linkMobile: {
    display: 'block',
    padding: '0.85rem 1.25rem',
    borderRadius: '0.75rem',
    fontSize: '1rem',
  },
  hamburger: {
    background: 'none',
    border: 'none',
    fontSize: '1.25rem',
    cursor: 'pointer',
    color: '#1c1612',
    padding: '0.25rem',
    lineHeight: 1,
    fontFamily: 'inherit',
  },
  dropdown: {
    position: 'absolute',
    top: '60px',
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #f0ebe4',
    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    padding: '0.5rem 1rem 1rem',
    gap: '0.25rem',
    zIndex: 99,
  },
};
