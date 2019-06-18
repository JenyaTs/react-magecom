import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <div className="app">
            <Header />
            <Main />
            <Sidebar />
            <Footer />
        </div>
    );
}

export default App;
