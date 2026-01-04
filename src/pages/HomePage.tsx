import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import { About } from '../components/FooterSections';
import Skills from '../components/Skills';

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <Hero />
            <div style={{ background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary))' }}>
                <Projects />
            </div>
            <Experience />
            <div style={{ background: 'var(--bg-secondary)' }}>
                <Skills />
            </div>
            <About />
        </div>
    );
};

export default HomePage;
