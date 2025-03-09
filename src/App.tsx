import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './styles/App.css';

function App() {
    return (
        <div className="min-h-screen bg-background">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App; 