import React, {useState} from 'react';
import CategoryAdder from './components/CategoryAdder';
import SubCategory from "./components/SubCategory";
import CategoryListWrapper from "./components/CategoryListWrapper";
import Main from './components/Main';

import './styles/styles.css'

function App() {
    const [toDoList, setToDolist] = useState({});
    const [toDoState, setToDoState] = useState(false);
    const [catList, setCatList] = useState([]);
    
    return (
        <div className="wrapper">
            <header className="header title">
                <span>New category</span>
                <CategoryAdder
                    todos={toDoList} 
                    updateTodos={setToDolist} 
                    categories={catList} 
                    updateCats={setCatList} 
                    component={SubCategory}
                    />
            </header>
            <div className="maincontent">
                <main className="main">
                    <div className="header">Main content</div>
                    <Main 
                        todos={toDoList} 
                        updateTodos={setToDolist}
                        categories={catList} 
                        updateCats={setCatList} 
                        toDoState={toDoState}
                    />
                </main>
                <aside className="sidebar">
                    <div className="header">Sidebar</div>
                    <CategoryAdder 
                        todos={toDoList} 
                        updateTodos={setToDolist} 
                        categories={catList} 
                        updateCats={setCatList} 
                        component={CategoryListWrapper}
                        setToDoState={setToDoState}
                        />
                </aside>
            </div>
        </div>
    );
}

export default App;
