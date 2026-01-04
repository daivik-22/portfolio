import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects' },
        { name: 'Experience', href: '/experience' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                transition: 'all 0.3s ease',
                padding: scrolled ? '15px 0' : '30px 0',
                background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--border-subtle)' : 'none'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'Outfit' }}>
                    KDR<span style={{ color: 'var(--accent-primary)' }}>.</span>
                </Link>

                <div style={{ display: 'flex', gap: '30px' }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            style={{
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                color: (location.pathname === link.href) ? 'var(--accent-primary)' : (scrolled ? 'var(--text-primary)' : 'var(--text-secondary)')
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                            onMouseLeave={(e) => {
                                if (location.pathname !== link.href) {
                                    e.currentTarget.style.color = scrolled ? 'var(--text-primary)' : 'var(--text-secondary)';
                                }
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
