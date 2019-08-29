import React, {useState} from 'react';
import CategoryAdder from './components/CategoryAdder';
import SubCategory from "./components/SubCategory";
import OpenSidebar from "./components/OpenSidebar";
import Sidebar from "./components/Sidebar";
import Main from './components/Main';
import { Route } from 'react-router-dom';

import './styles/styles.css'

function App() {
    const [toDoList, setToDolist] = useState({});
    const [toDoState, setToDoState] = useState(false);
    
    return (
        <div className="wrapper">
            <header className="header title">
                <span>New category</span>
                <CategoryAdder
                    todos={toDoList}
                    updateTodos={setToDolist}
                    component={SubCategory}
                />
                <OpenSidebar />
            </header>

            <div className="maincontent">
                <main className="main">
                    <div className="header">Main content</div>
                    <Main
                        todos={toDoList}
                        updateTodos={setToDolist}
                        toDoState={toDoState}
                    />
                </main>
                <Route
                    path='/categories'
                    render={(props) =>
                        <Sidebar
                            {...props}
                            className="sidebar"
                            todos={toDoList}
                            updateTodos={setToDolist}
                            setToDoState={setToDoState}
                        />}
                />
            </div>
        </div>
    );
}

export default App;
