import React, {useState} from 'react';
import './App.css';
import CategoryAdder from './components/CategoryAdder';
import AddCategory from "./components/AddCategory";
import CategoryList from "./components/CategoryList";
// import Footer from './components/Footer';
// import Main from './components/Main';

function App() {
    // const [toDoList, setToDolist] = useState([]);
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
            <header>
                <span>New category</span>
                <CategoryAdder categories={catList} updateCats={setCatList} title="New category" component={AddCategory}/>
            </header>
            
            {/*<Main categories={catList} changeCategories={setCatList}/>*/}
            <aside>
                <CategoryAdder categories={catList} updateCats={setCatList} component={CategoryList}/>
            </aside>
            
            {/*<Footer />*/}
        </div>
    );
}

export default App;
