import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';

const Skills: React.FC = () => {
    return (
        <section className="container" id="skills">
            <div style={{ marginBottom: '60px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Technical Expertise</h2>
                <div style={{ width: '60px', height: '4px', background: 'var(--accent-primary)', borderRadius: '2px' }}></div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                {portfolioData.skills.map((skill: any, index: number) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        style={{
                            padding: '35px',
                            borderRadius: '20px',
                            background: 'var(--bg-secondary)',
                            border: skill.isPrimary ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        {skill.isPrimary && (
                            <div style={{
                                position: 'absolute',
                                top: '0',
                                right: '0',
                                background: 'var(--accent-primary)',
                                color: 'white',
                                fontSize: '0.65rem',
                                fontWeight: 700,
                                padding: '4px 12px',
                                borderRadius: '0 0 0 10px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                Primary Focus
                            </div>
                        )}
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '25px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '10px', height: '3rem' }}>
                            {skill.category}
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: 'auto' }}>
                            {skill.items.map((item: string, i: number) => (
                                <span
                                    key={i}
                                    style={{
                                        fontSize: '0.85rem',
                                        padding: '6px 14px',
                                        borderRadius: '8px',
                                        background: 'var(--bg-tertiary)',
                                        color: 'var(--text-secondary)',
                                        border: '1px solid var(--border-subtle)',
                                        transition: 'all 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--accent-primary)';
                                        e.currentTarget.style.color = 'var(--text-primary)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--border-subtle)';
                                        e.currentTarget.style.color = 'var(--text-secondary)';
                                    }}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
