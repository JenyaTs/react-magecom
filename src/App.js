import React, {useState} from 'react';
import CategoryAdder from './components/CategoryAdder';
import SubCategory from "./components/SubCategory";
import OpenSidebar from "./components/OpenSidebar";
import Sidebar from "./components/Sidebar";
import Main from './components/Main';

import './styles/styles.css'

function App() {
    const [toDoList, setToDolist] = useState({});
    const [toDoState, setToDoState] = useState(false);
    const [sidebarState, setSidebarState] = useState(false);
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
                    <OpenSidebar state={sidebarState} setState={setSidebarState}/>
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
                <Sidebar
                    className="sidebar"
                    todos={toDoList}
                    updateTodos={setToDolist}
                    categories={catList}
                    updateCats={setCatList}
                    setToDoState={setToDoState}
                    sidebarState={sidebarState}
                />
            </div>
        </div>
    );
}

export default App;
