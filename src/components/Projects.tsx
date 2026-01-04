import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
    return (
        <section className="container" id="projects">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
                <div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Featured Projects</h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--accent-primary)', borderRadius: '2px' }}></div>
                </div>
                <Link to="/projects" style={{ color: 'var(--accent-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    View Full Archive <ArrowRight size={18} />
                </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                {portfolioData.projects.slice(0, 3).map((project, index) => (
                    <motion.div
                        key={index}
                        className="glass"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        style={{
                            padding: '30px',
                            borderRadius: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            transition: 'transform 0.3s ease, border-color 0.3s ease',
                        }}
                    >
                        <div style={{ marginBottom: '20px' }}>
                            <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 600 }}>{project.subtitle}</span>
                            <h3 style={{ fontSize: '1.5rem', margin: '5px 0 15px 0' }}>{project.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '20px' }}>{project.description}</p>
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '25px' }}>
                            {project.tech.map((tag, i) => (
                                <span
                                    key={i}
                                    style={{
                                        fontSize: '0.75rem',
                                        padding: '4px 10px',
                                        borderRadius: '4px',
                                        background: 'var(--bg-tertiary)',
                                        color: 'var(--text-secondary)',
                                        border: '1px solid var(--border-subtle)'
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div style={{ marginTop: 'auto' }}>
                            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '20px', marginBottom: '20px' }}>
                                <h4 style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Key Metrics</h4>
                                <ul style={{ paddingLeft: '0' }}>
                                    {project.metrics.slice(0, 2).map((metric, i) => (
                                        <li key={i} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '8px', display: 'flex', gap: '10px' }}>
                                            <span style={{ color: 'var(--accent-primary)' }}>▹</span> {metric}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                        color: 'var(--text-primary)'
                                    }}
                                >
                                    <Github size={18} /> Code
                                </a>
                                <Link to="/projects" style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)' }}>
                                    Details ↗
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
