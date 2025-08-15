import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div>
            
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            
        </div>
    );
};

export default Home;