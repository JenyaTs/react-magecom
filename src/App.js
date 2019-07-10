import React, {useState} from 'react';
import CategoryAdder from './components/CategoryAdder';
import AddCategory from "./components/AddCategory";
import CategoryList from "./components/CategoryList";
import Main from './components/Main';

import './styles/styles.css'

function App() {
    const [toDoList, setToDolist] = useState({});
    const [toDoState, setToDoState] = useState(false);
    const [catList, setCatList] = useState([]);
    
    return (
        <div className="wrapper">
            <header className="header">
                <span>New category</span>
                <CategoryAdder 
                    todos={toDoList} 
                    updateTodos={setToDolist} 
                    categories={catList} 
                    updateCats={setCatList} 
                    component={AddCategory}
                    />
            </header>
            <div className="maincontent">
                <main className="main">
                    <Main 
                        todos={toDoList} 
                        updateTodos={setToDolist}
                        categories={catList} 
                        updateCats={setCatList} 
                        toDoState={toDoState}
                    />
                </main>
                <aside className="sidebar">
                    <CategoryAdder 
                        todos={toDoList} 
                        updateTodos={setToDolist} 
                        categories={catList} 
                        updateCats={setCatList} 
                        component={CategoryList}
                        setToDoState={setToDoState}
                        />
                </aside>
            </div>
        </div>
    );
}

export default App;
