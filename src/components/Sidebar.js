import React from "react";
import CategoryAdder from './CategoryAdder';
import CategoryListWrapper from "./CategoryListWrapper";

function Sidebar(props) {
    if (props.sidebarState) {
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
                />
            </aside>
        )
    }

    return null;
}

export default Sidebar;