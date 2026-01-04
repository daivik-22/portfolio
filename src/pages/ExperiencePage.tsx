import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { ArrowLeft, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExperiencePage: React.FC = () => {
    return (
        <div className="experience-page container" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-primary)', marginBottom: '40px', fontWeight: 600 }}>
                <ArrowLeft size={20} /> Back to Home
            </Link>

            <div style={{ marginBottom: '60px' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Professional Experience</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px' }}>
                    A detailed breakdown of my roles, responsibilities, and the technologies I've used to solve real-world engineering problems.
                </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
                {portfolioData.experience.map((exp) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{
                            padding: '40px',
                            background: 'var(--bg-secondary)',
                            borderRadius: '24px',
                            border: '1px solid var(--border-subtle)',
                            position: 'relative'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginBottom: '30px' }}>
                            <div>
                                <h2 style={{ fontSize: '2rem', marginBottom: '8px', fontWeight: 700 }}>{exp.role}</h2>
                                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-muted)', fontWeight: 500 }}>{exp.company}</h3>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                    <Calendar size={16} /> {exp.period}
                                </span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                    <MapPin size={16} /> {exp.location}
                                </span>
                            </div>
                        </div>

                        <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '30px', fontWeight: 500 }}>
                            {exp.description}
                        </p>

                        <div style={{ marginBottom: '30px' }}>
                            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '15px' }}>Detailed Description</h4>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {exp.detailedBullets.map((bullet, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '15px', color: 'var(--text-secondary)', marginBottom: '12px', lineHeight: '1.6' }}>
                                        <span style={{ color: 'var(--accent-primary)' }}>▹</span> {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '15px' }}>Technologies Used</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {exp.tech.map((t) => (
                                    <span key={t} style={{ fontSize: '0.8rem', padding: '6px 14px', borderRadius: '6px', background: 'var(--bg-tertiary)', color: 'var(--text-primary)', border: '1px solid var(--border-subtle)' }}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ExperiencePage;
