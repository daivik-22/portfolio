import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsPage: React.FC = () => {
    return (
        <div className="projects-page container" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-primary)', marginBottom: '40px', fontWeight: 600 }}>
                <ArrowLeft size={20} /> Back to Home
            </Link>

            <div style={{ marginBottom: '60px' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Project Archive</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px' }}>
                    A deep dive into the engineering challenges, solutions, and measurable outcomes of my work in Edge AI and Computer Vision.
                </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
                {portfolioData.projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '50px',
                            paddingBottom: '80px',
                            borderBottom: index === portfolioData.projects.length - 1 ? 'none' : '1px solid var(--border-subtle)'
                        }}
                    >
                        <div>
                            <span style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{project.subtitle}</span>
                            <h2 style={{ fontSize: '2.5rem', margin: '15px 0' }}>{project.title}</h2>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '25px' }}>
                                {project.tech.map((t) => (
                                    <span key={t} style={{ fontSize: '0.8rem', padding: '4px 12px', borderRadius: '4px', background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}>{t}</span>
                                ))}
                            </div>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '30px' }}>
                                {project.longDescription}
                            </p>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
                                    <Github size={20} /> GitHub
                                </a>
                                {project.demo !== '#' && (
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
                                        <ExternalLink size={20} /> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="glass" style={{ padding: '40px', borderRadius: '20px' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-primary)' }}></span>
                                Key Outcomes & Metrics
                            </h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {project.metrics.map((metric, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '15px', color: 'var(--text-primary)', fontSize: '1rem', lineHeight: '1.5' }}>
                                        <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>0{i + 1}</span>
                                        {metric}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
