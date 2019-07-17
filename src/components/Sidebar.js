import React from "react";
import CategoryAdder from './CategoryAdder';
import CategoryListWrapper from "./CategoryListWrapper";

function Sidebar(props) {
    return (
        <aside className="sidebar">
            <div className="header">Sidebar</div>
            <CategoryAdder
                todos={props.todos}
                updateTodos={props.updateTodos}
                categories={props.categories}
                updateCats={props.updateCats}
                setToDoState={props.setToDoState}
                component={CategoryListWrapper}
                match={props.match}
            />
        </aside>
    )
}

export default Sidebar;