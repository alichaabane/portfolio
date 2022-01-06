import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Technology from "./components/Technology";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
    return (
        <div>
            <Navigation/>
            <Header/>
            <Project />
            <Technology />
            <Contact />
        </div>
    );
}

export default App;
