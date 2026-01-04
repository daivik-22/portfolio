import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Experience: React.FC = () => {
    return (
        <section className="container" id="experience">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
                <div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Experience Snapshot</h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--accent-primary)', borderRadius: '2px' }}></div>
                </div>
                <Link to="/experience" style={{ color: 'var(--accent-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    Details & Learnings <ArrowRight size={18} />
                </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                {portfolioData.experience.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'minmax(150px, 1fr) 3fr',
                            gap: '20px',
                            paddingBottom: '40px',
                            borderLeft: '2px solid var(--bg-tertiary)',
                            paddingLeft: '30px',
                            position: 'relative'
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            left: '-7px',
                            top: '0',
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            background: 'var(--accent-primary)',
                            boxShadow: '0 0 10px var(--accent-primary)'
                        }}></div>

                        <div>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>{exp.period}</span>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '5px', fontWeight: 700 }}>{exp.role}</h3>
                            <h4 style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '15px', fontWeight: 500 }}>{exp.company}</h4>
                            <ul style={{ paddingLeft: '0' }}>
                                {exp.summaryBullets.map((bullet, i) => (
                                    <li key={i} style={{ color: 'var(--text-secondary)', marginBottom: '10px', display: 'flex', gap: '10px' }}>
                                        <span style={{ color: 'var(--accent-primary)', opacity: 0.6 }}>▹</span> {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
