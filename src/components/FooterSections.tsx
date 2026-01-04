import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { Mail, Github, Linkedin } from 'lucide-react';

export const About: React.FC = () => {
    return (
        <section className="container" id="about">
            <div style={{ maxWidth: '800px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>About Me</h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}
                >
                    <p style={{ marginBottom: '20px' }}>{portfolioData.about.p1}</p>
                    <p>{portfolioData.about.p2}</p>
                </motion.div>
            </div>
        </section>
    );
};

export const Contact: React.FC = () => {
    const { contact } = portfolioData;
    return (
        <section className="container" id="contact" style={{ paddingBottom: '100px', borderTop: '1px solid var(--border-subtle)', paddingTop: '100px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'start' }}>
                <div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Let's Build Together</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '400px' }}>
                        I'm currently looking for new opportunities in Edge AI and Robotics. Whether you have a project in mind or just want to say hi, I'd love to hear from you.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <a href={`mailto:${contact.email}`} style={{ fontSize: '1.1rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Mail size={20} color="var(--accent-primary)" /> {contact.email}
                        </a>
                        {contact.secondaryEmail && (
                            <a href={`mailto:${contact.secondaryEmail}`} style={{ color: 'var(--text-muted)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <Mail size={18} /> {contact.secondaryEmail}
                            </a>
                        )}
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0' }}>Social Profiles</h3>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact-card">
                            <Github size={24} />
                            <span>GitHub</span>
                        </a>
                        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card">
                            <Linkedin size={24} />
                            <span>LinkedIn</span>
                        </a>
                    </div>

                    <div style={{ marginTop: '20px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        © {new Date().getFullYear()} Daivik Reddy. All Rights Reserved.
                        <br />
                        Built with React, TS, and Systems Thinking.
                    </div>
                </div>
            </div>

            <style>{`
        .contact-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 15px 25px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          transition: all 0.3s ease;
          font-weight: 500;
        }
        .contact-card:hover {
          border-color: var(--accent-primary);
          color: var(--accent-primary);
          transform: translateY(-5px);
        }
      `}</style>
        </section>
    );
};
