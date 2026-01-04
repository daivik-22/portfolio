import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
    const { hero } = portfolioData;

    return (
        <section className="hero container" id="home" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <span className="accent-text" style={{ color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                    Available for Opportunities
                </span>
                <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', margin: '20px 0', lineHeight: 1.1 }}>
                    {hero.title.split(' & ').map((part, i) => (
                        <React.Fragment key={i}>
                            {i > 0 && <span style={{ color: 'var(--accent-primary)' }}> & </span>}
                            {part}
                        </React.Fragment>
                    ))}
                </h1>
                <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '40px' }}>
                    {hero.valueProp}
                </p>

                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    {hero.ctas.map((cta, index) => (
                        cta.primary ? (
                            <Link
                                key={index}
                                to="/projects"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '14px 28px',
                                    borderRadius: '8px',
                                    fontWeight: 600,
                                    fontSize: '1rem',
                                    backgroundColor: 'var(--accent-primary)',
                                    color: 'white',
                                    transition: 'opacity 0.2s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                            >
                                {cta.label}
                                <ArrowRight size={18} />
                            </Link>
                        ) : (
                            <a
                                key={index}
                                href={cta.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                download={cta.link.includes('resume.pdf') ? "Daivik_Reddy_Resume.pdf" : undefined}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '14px 28px',
                                    borderRadius: '8px',
                                    fontWeight: 600,
                                    fontSize: '1rem',
                                    backgroundColor: 'transparent',
                                    border: '1px solid var(--border-subtle)',
                                    color: 'white',
                                }}
                            >
                                {cta.label}
                                <Download size={18} />
                            </a>
                        )
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
