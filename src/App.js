import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
    const [toDoList, setToDolist] = useState([]);
    const [catList, setCatList] = useState([]);

    return (
        <div className="app">
            <Header />
            <Main categories={catList} changeCategories={setCatList}/>
            <Sidebar />
            <Footer />
        </div>
    );
}

export default App;
