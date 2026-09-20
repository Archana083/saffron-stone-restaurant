import { ArrowRight, Menu, X } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'Story', to: '/story' },
  { label: 'Reserve', to: '/reserve' },
];

export function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="site-shell">
      <header className={`nav ${scrolled ? 'nav-solid' : ''}`}>
        <NavLink to="/" className="brand" aria-label="Saffron and Stone home">
          <span className="brand-mark">S</span>
          <span>
            SAFFRON <i>&</i> STONE
          </span>
        </NavLink>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => (isActive ? 'active-link' : '')}>
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/reserve" className="nav-cta">
            Reserve a table <ArrowRight size={15} />
          </NavLink>
        </nav>

        <button className="menu-btn" onClick={() => setMobileOpen((value) => !value)} aria-label="Toggle navigation">
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </header>

      {mobileOpen ? (
        <div className="mobile-nav">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={() => setMobileOpen(false)}>
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/reserve" className="nav-cta mobile-cta" onClick={() => setMobileOpen(false)}>
            Reserve a table <ArrowRight size={15} />
          </NavLink>
        </div>
      ) : null}

      <main className="page-shell">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          SAFFRON <i>&</i> STONE
        </div>
        <p>Modern Indian dining, Fort · Mumbai</p>
        <div className="social">
          <span className="social-icon" aria-hidden="true">
            ◎
          </span>
          <span>Follow the table</span>
        </div>
        <small>© 2026 Saffron & Stone</small>
      </footer>
    </div>
  );
}
