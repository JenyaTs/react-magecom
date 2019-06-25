import React, {useState} from 'react';
import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
    const [toDoList, setToDolist] = useState([]);
    const [catList, setCatList] = useState([
        // {
        //     id: 1,
        //     name: 'react',
        //     tasks: [],
        //     subCategory: [{
        //         id: 1.1,
        //         name: 'hooks',
        //         tasks: [],
        //         subCategory: []
        //     }]
        // },
        // {
        //     id: 2,
        //     name: 'redux',
        //     tasks: [],
        //     subCategory: []
        // }
    ]);

    return (
        <div className="app">
            {/*<Header />*/}
            {/*<Main categories={catList} changeCategories={setCatList}/>*/}
            <Sidebar categories={catList} updateCats={setCatList}/>
            {/*<Footer />*/}
        </div>
    );
}

export default App;
